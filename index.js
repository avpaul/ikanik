'use strict';
var express = require('express');
var logger = require('morgan');
var path = require('path');

var indexRouter = require('./app_server/routes/index');

var app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/node_modules', function(req, res, next) {
    var filePath = path.join(__dirname, req.originalUrl);
    if (!req.originalUrl.includes('bootstrap.css.map') && !req.originalUrl.includes('bootstrap.js.map')) {
        res.sendFile(filePath);
    } else {
        res.sendStatus('404');
    }
})
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen('3000');