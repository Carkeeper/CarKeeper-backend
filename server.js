const path = require('path');
const express = require('express');
const errorHandler = require('./errorHandling');
const app = express();
require('./common.middlewares').addCommonMiddlewares(app);
require('./config/passport.config').init();
const fs = require('fs');
const http = require('http');
const https = require('https');
const protocols = require('./config/protocols.config');

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



http.createServer(app).listen(protocols.httpPort,
    () => console.log(`http on port ${protocols.httpPort}`));
