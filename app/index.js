var express = require('express');
var app = express();
var compression = require('compression');
var serveStatic = require('serve-static');
//var extend = require('xtend');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


/* It's not quite Project Metosis, but this is going to allow us to
 * serve meta pages (static resources) that are isolated from the core application middleware
 * and all of its dependencies. We also serve the web static pages that are pulling
 * in the app for loading and download in the browser [(]via serverStatic() below]
 *
*/
//View Engine setup
app.set('views', __dirname + '/../views');
// Configure expressjs (ejs) engine, for it will be #awesome for us.
app.engine('html', require('ejs').renderFile);


// Use gzip compression
app.use(compression());

//connect some custom POST middleware
//app.post('/exampleMiddleware', require('./example').exampleImport);


/*
 * Load Variant statically, as new middleware function to serve files from within specified directory
 * This allows us to operate Variant as a thin browser client with no dependency on server middleware
*/
app.use(serveStatic(__dirname + '/../public'));

/* This is to allow Bleeding Edge changes to be seen from the active
 * node.js server that is serving us.
*/
app.use(function(req, res, next) {
	res.renderDebug = function(page) {
		return res.render(page, {
			cache: !req.query.hasOwnProperty('debug')
		});
	};
	next();
});


/*
 * Load Variant routes
*/

/* KISS. A keep it simple routing scheme here... forever. This app is intended to
 * be a single page app with meta pages, both of which we can assign routes for.
*/

// Serve landing.html in /
app.get('/', function(req, res) {
	res.renderDebug('material-free-trial.html');
});

// Serve material-free-trial.html in /
app.get('/virtual-labs-trial', function(req, res) {
	res.renderDebug('material-free-trial.html');
});

// Serve landing.html in /
app.get('/privacy', function(req, res) {
	res.renderDebug('privacy.html');
});

// Serve landing.html in /
app.get('/terms', function(req, res) {
	res.renderDebug('terms.html');
});

/* ***********
 * Error Pages
 * ***********
 */


// Error 404
app.use(function(req, res) {
	res.status(404);
	res.render('error_404.html');
});

// Error 403
app.use(function(req, res) {
	res.status(403);
	res.render('error_404.html');
});

// Error 401
app.use(function(req, res) {
	res.status(401);
	res.render('error_404.html');
});

// Error 500
app.use(function(req, res) {
	res.status(500);
	res.render('error_404.html');
});


app.use(favicon(__dirname + '/../public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/* jshint ignore:start */
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
/* jshint ignore:end */



module.exports = app;