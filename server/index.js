// TODO: Check code
// TODO: Registration checks

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session  = require('express-session');
const http = require('http').Server(app);
const io = require('socket.io')(http);
io.origins('*:*');
const path = require('path');


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

//Includes routes
app.use('/api', require('./routes/project'));
app.use('/api', require('./routes/task'));
app.use('/api', require('./routes/user'));

//Include sockets
require('./sockets/sockets')(io);


//============ GET ============= //

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/app', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 8081;
http.listen(PORT, () =>
    console.log(`Server running on port: ${PORT}`)
);