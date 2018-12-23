const passport = require('passport');
const LocalStrategy  = require('passport-local').Strategy;

const { User } = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(email, password, done){
    
    User.findOne({email: email }, function(err, user){
        if (err) return done(err);

        if (user) {
            user.comparePassword(password, (err, isMatch) => {
                
                if (isMatch) return done(null, user);
                done(null, false, { message: 'Incorrect password.' })
            })  
       
        } else {
            done(null, false, { message: 'Incorrect username.' });
        }
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err,user){
        err 
            ? done(err)
            : done(null,user);
    });
});

module.exports = { passport };