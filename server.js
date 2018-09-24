const path = require('path');
const cookieParser = require('cookie-parser');
const protocols = require('./config/protocols.config');
const express = require('express');
const errorHandler = require('./errorHandling');
//require('./common.middlewares').addCommonMiddlewares(app);
// require('./config/passport.config').init();
const fs = require('fs');
const http = require('http');
const https = require('https');
const passport = require('passport');
const localPassportMongoose = require('passport-local-mongoose');
const port = process.env.PORT || 3000; // Just for testing
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.route');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/usersModel');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// json parser middleware
app.use(express.json());
// urlencoded parser middleware
app.use(express.urlencoded({extended: true}));
// cookie parser middleware
app.use(cookieParser());
// log middleware
app.use(function (req, res, next) {
    console.log(`request url: ${req.url} | user: ${JSON.stringify(req.user)} | authenticate: ${req.isAuthenticated()}`);
    next();
});
// passport init and session

app.use(session({   // session middleware - do not create before login. do not save if nothing has changed
    secret: 'replace me on production',
    resave: false,
    saveUninitialized: false,
    //store: new FileStore
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/api/sign-up', (req, res) => {
    console.log(req.body.username);
    User.register(new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender:req.body.gender,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        picture: req.body.picture,
        registrationDate: req.body.registrationDate,
        street: req.body.street,
        city: req.body.city,
        country: req.body.country,
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            passport.authenticate("local")(req, res, function () {
                console.log('success');
                res.send("main");
            });
        }
    })
});


app.listen(port,
    () => console.log('server listening on port 3000'));


// app.use(function (req, res, next) {
//     if (req.secure) {
//         next(); // request is HTTPS
//     } else {
//         // request was via http, so redirect to https
//         const redirectUrl = `https://${req.hostname}:${protocols.httpsPort}${req.url}`;
//         console.log(`redirect to secure protocol: ${redirectUrl}`);
//         res.redirect(redirectUrl);
//     }
// });


// http.createServer(app).listen(protocols.httpPort,
//     () => console.log(`http on port ${protocols.httpPort}`));
// https.createServer(httpsOptions, app).listen(protocols.httpsPort,
//     () => console.log(`https on port ${protocols.httpsPort}`));

// const protocols = require('./config/protocols.config');
// const httpsOptions = {
//     key: fs.readFileSync('./cert/carkeepers.key'),
//     cert: fs.readFileSync('./cert/carkeepers.crt')
// };