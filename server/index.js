// TODO: Check code and divide into parts
// TODO: Registration checks

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session  = require('express-session');
const path = require('path');

const app = express();
const { auth } = require('./middleware/auth');
const DB_ERROR_CODE = 500;


// Load static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Include middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false
}));

// Include Passport
const { passport } = require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// Connect to DB
mongoose.Promise = global.Promise;
mongoose.connect(config.DB_HOST, {
        useNewUrlParser: true,
        auth: {
            user: config.DB_USER,
            password: config.DB_PASS
          }
        })
    .then(() => console.log('Connected to db \
        \n ======================================================================='))
    .catch(err => console.log(err));

// Include models
const { User } = require('./models/user');
const { Project } = require('./models/project')


//============ GET ============= //

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/api/auth', auth, (req, res) => {
    res.json({
		isAuth: true,
		id: req.user._id,
		email: req.user.email,
		name: req.user.name,
	});
});

app.get('/api/logout', (req, res) => {
    req.logout();
    res.json({logout: true});
});

app.get('/api/activation/:id/:token', (req, res) => {
    const userId = req.params.id;
    const token = req.params.token;
    User.findById(userId)
        .then(user => {
            if (user.activationToken !== token) throw new Error('Incorrect activation token');

            return User.findOneAndUpdate({
                    '_id': userId,
                },
                {   '$set': {
                        'activated': true,
                    }
                },
                {new: true})
        })

        .then(user => {
            res.contentType = 'html';
            res.send(`
            <h2>${user.name}, cпасибо за регистрацию.<br>Ваш аккаунт активирован</h2>
            <script>
                setTimeout(()=> window.location.href="${config.SITE_URL}", 5000)
            </script>
            `)
        })

        .catch(err => {
            if (err.message === 'Incorrect activation token') {
                res.send('Неверная ссылка активации')
            } else {
                res.sendStatus(DB_ERROR_CODE);
                console.log(err);
            }
        });
});

app.get('/api/getProject', (req, res) => {
    Project.findById(req.query.id)
        .then( project => {
            if (!project) {
                res.json({
                    error: true,
                    message: 'Project not found'
                })
            }
            res.json(project);
        })

        .catch( err => {
            console.log(err);
            res.sendStatus(DB_ERROR_CODE);
        });
});

app.get('/api/getProjects', auth, (req, res) => {
    Project.find({
        '_id': {
            $in: req.user.projects
        }
    })
        .then( projects => {
            res.json(projects);
        })

        .catch( err => {
            console.log(err);
            res.sendStatus(DB_ERROR_CODE);
        });
});

//============ POST ============= //

app.post('/api/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);

        if (!user) return res.json({
            isAuth: false,
            msg: 'Неверный логин или пароль'
        });

        if (!user.activated) {
            return res.json({
                isAuth: false,
                msg: 'Аккаунт не активирован' 
            })
        }
        
        req.logIn(user, err => {
            if (err) return next(err);

            res.json({
                name : user.name,
                email: user.email,
                isAuth: true
            })
        });
    })(req, res, next);
});

app.post('/api/register', (req, res, next)=> {
    let stopFlag = false;
    User.findOne({'email': req.body.email})
        .then(user => {
            if (user) {
                stopFlag = true;
                res.json({
                    name : user.name,
                    email: user.email,
                    isAuth: false,
                    msg: 'Аккаунт с таким email уже существует'
                })
            }
        })

        .catch(err => console.log(err));
    
    if (stopFlag) return;
    const user = new User(req.body);
    user.save( err => {
        if (err) return next(err);

        res.json({
            name : user.name,
            email: user.email,
            isAuth: false,
            activated: user.activated,
            msg: 'Подтвердите регистрацию, перейдя по ссылке в письме'
            })
    });
});

app.post('/api/addProject', (req, res) => {
    const project = new Project(req.body);
    let _project = {};

    project.save()
        .then( project => {
            _project = project;
            
            return User.findById(project.creator).exec()
        })
        
        .then( user => {
            if (!user) { throw new Error("no such user")};

            user.projects.push(_project._id);
            return user.save();
        })

        .then(user => {
            res.json({
                success: true,
                user,
                project: _project
            });
        })

        .catch( err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});

app.post('/api/addTask', (req, res) => {
    const {name, creator, finishTime, finished, projectId} = req.body;

    Project.findById(projectId)
        .then(project => {
            project.tasks.push({
                name,
                creator,
                finishTime,
                finished
            });

            return project.save();
        })

        .then(project => {
            res.json({
                success: true,
                project: project
            })
        })

        .catch(err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});

// =========== UPDATE ===============

app.post('/api/updateProject', auth, (req, res) => {
    const {projectId, name} = req.body;
    console.log(projectId);
    Project.findById(projectId)

        .then(project => {
            if (!project) {
                throw new Error('No project')
            }
            let isMember = false;
            for (let member of project.members) {
                if (member._id.toString() === projectId) {
                    isMember = true;
                    break;
                }
            }

            if ( !(project.creator.toString() === req.user._id.toString() || isMember) ) {
                throw new Error('Permission denied');
            }

            return Project.findByIdAndUpdate(
                {
                    '_id': projectId,
                },
                {   '$set': {
                        'name': name,
                    }
                },
                {new: true})
        })
        
        .then( project => {
            res.json({
                success: true,
                project
            })
        })

        .catch (err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});

app.post('/api/updateTask', (req, res) => {
    const {name, creator, finishTime, finished, projectId, taskId} = req.body;
    Project.findOneAndUpdate(
        {'_id': projectId , 'tasks._id': taskId},
        {   '$set': {
                'tasks.$.name': name,
                'tasks.$.creator': creator,
                'tasks.$.finishTime': finishTime,
                'tasks.$.finished': finished
            }
        },
        {new: true})
        
        .then( project => {
            res.json({
                success: true,
                project
            })
        })

        .catch (err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});

// ======== DELETE =========

app.delete('/api/deleteProject', auth, (req, res) => { 
    const {projectId} = req.body; 
    let _project;
    Project.findById({
        '_id': projectId 
    })  
    
        .then( project => {
            _project = project;

            if (project.creator.toString() !== req.user._id.toString()) {
                throw new Error('Permission denied');
            }
            return Project.findByIdAndRemove(projectId);
        })

        .then (project => {
            return User.update(
                {'_id': {$in: _project.members}},
                {$pull: {
                    'projects': {'_id': projectId} 
                }},
                { multi: true })
        })

        .then (result => {
            res.json({
                success: true,
                project: _project
            })
        })
        .catch (err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});


app.delete('/api/deleteTask', (req, res) => { 
    const {projectId, taskId} = req.body; 
    Project.findOneAndUpdate({
        '_id': projectId },
        {
            $pull: {
                'tasks' :  {'_id': taskId}
            }
        },
        {new: true}
        )
        
        .then( project => {
            console.log(project);
            res.json({
                success: true,
                project
            })
        })

        .catch (err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () =>
    console.log(`Server running on port: ${PORT}`)
);