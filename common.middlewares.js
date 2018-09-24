const express = require('express')
const cookieParser = require('cookie-parser');
const protocols = require('./config/protocols.config');

module.exports.addCommonMiddlewares = (app) => {
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
    // json parser middleware
    app.use(express.json());
    // urlencoded parser middleware
    app.use(express.urlencoded({extended: true}));
    // cookie parser middleware
    app.use(cookieParser());
    // log middleware
    app.use(function (req, res, next) {
        console.log(`request url: ${req.url} | user: ${JSON.stringify(req.user)} | authenticate: ${req.isAuthenticated()}`);
        next()
    });
};

module.exports.authenticationMiddleware = () => {
    return (req, res, next) => {
        console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.status(403).redirect('/login')
        }
    }
};