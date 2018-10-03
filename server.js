const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

const passport = require('passport');
const fs = require('fs');
const http = require('http');
const https = require('https');

const User = require('./models/usersModel');
const protocols = require('./config/protocols.config');

//Set static folder
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => {
    res.redirect('/home');
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(protocols.httpPort,
    () => console.log('server listening on port 3000'));