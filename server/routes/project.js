const express = require('express');
const router = express.Router();
const config = require('../config');

const { sendInviteLink } = require('../config/nodemailer');
const { auth } = require('../middleware/auth');
const DB_ERROR_CODE = 500;

// Include models
const mongoose = require('mongoose');
const { User } = require('../models/user');
const { Project } = require('../models/project');

//============ GET ============= //

router.get('/getProjects', auth, (req, res) => {
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

router.get('/getProject', (req, res) => {
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

router.get('/addUserToProject/:secret/:projectId/:userId', auth, (req, res) => {
    const {secret, projectId, userId} = req.params;
    let _project = {};
    let _user = {};
    Project.findById(projectId)
        .then(project => {
            if (!project) throw new Error('Incorrect link');
            _project = project;
            if (project.inviteSecret !== secret) throw new Error('Incorrect link');
            return User.findById(userId);
        })

        .then(user => {
            if (!user) throw new Error('Incorrect link');
            _user = user;
            user.projects.push(projectId);
            return user.save();
        })

        .then(user => {
            _project.members.push(user._id);
            return _project.save();
        })

        .then(project => {
            res.contentType = 'html';
            res.send(`
            <h2>${_user.name}, Вы подтвердили участие в проекте ${project.name}.
            <script>
                setTimeout(()=> window.location.href="${config.SITE_URL}", 3000)
            </script>
            `)
        })

        .catch(err => {
            if (err.message === 'Incorrect link') {
                res.send('Неверная ссылка');
            } else {
                res.sendStatus(DB_ERROR_CODE);
                console.log(err);
            }
        });
});


//============ POST ============= //

router.post('/addProject', auth, (req, res) => {
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

router.post('/sendInviteLink', auth, (req, res) => {
    const {projectId, userEmail} = req.body;
    let _project = {};
    Project.findById(projectId)
        .then(project => {
            if (!project) throw new Error('Incorrect request');
            _project = project;
            return User.findOne({'email': userEmail});
        })

        .then(user => {
            if (!user) throw new Error('Incorrect request');
            const link = `${config.SERVER_URL}/api/addUserToProject/${_project.inviteSecret}/${_project._id}/${user._id}`;
            sendInviteLink(user.email, user.name, _project.name, link);
            res.json({success: true})
        })

        .catch(err => {
            console.log(err);
            res.sendStatus(DB_ERROR_CODE);
        });
});

//============ UPDATE ============= //

router.post('/updateProject', auth, (req, res) => {
    const {projectId, name} = req.body;
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

            // if ( !(project.creator.toString() === req.user._id.toString() || isMember) ) {
            //     throw new Error('Permission denied');
            // }

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

//============ DELETE ============= //

router.delete('/deleteProject', auth, (req, res) => { 
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
            return User.updateMany(
                {'_id': {$in: [..._project.members, _project.creator]}},
                {$pull: {
                    'projects': _project._id 
                }}
            )
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


module.exports = router;