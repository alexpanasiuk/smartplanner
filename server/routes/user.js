const express = require('express');
const router = express.Router();
const config = require('../config');
const DB_ERROR_CODE = 500;

const { auth } = require('../middleware/auth');
const { passport } = require('../config/passport');

// Include models
const { User } = require('../models/user');

//============ GET ============= //

router.get('/auth', auth, (req, res) => {
    res.json({
		isAuth: true,
		id: req.user._id,
		email: req.user.email,
		name: req.user.name,
	});
});

router.get('/logout', (req, res) => {
    req.logout();
    res.json({logout: true});
});

router.get('/activation/:id/:token', (req, res) => {
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

//============ POST ============= //

router.post('/login', (req, res, next) => {
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
                id: user._id,
                name : user.name,
                email: user.email,
                isAuth: true
            })
        });
    })(req, res, next);
});

router.post('/register', (req, res, next)=> {
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

module.exports = router;