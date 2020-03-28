var auth = require('basic-auth');

var admins = {
    'admin': { password: 'admin' },
};


module.exports = function (req, res, next) {

    var user = auth(req);
    if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send();
    }
    return next();
};




// app.js

var auth = require('./auth');
var express = require('express');

var app = express();

// ... some not authenticated middlewares

app.use(auth);

// ... some authenticated middlewares