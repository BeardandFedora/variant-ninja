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
var multer = require('multer');


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
	res.renderDebug('builder.html');
});

// Serve learn-life-sciences.html in /
app.get('/campaigns', function(req, res) {
	res.renderDebug('campaigns.html');
});

// Serve learn-life-sciences.html in /
app.get('/learn-life-sciences', function(req, res) {
	res.renderDebug('learn-life-sciences.html');
});

// Serve material-free-trial.html in /
app.get('/virtual-labs-trial', function(req, res) {
	res.renderDebug('material-free-trial.html');
});

// Serve privacy.html in /privacy
app.get('/privacy', function(req, res) {
	res.renderDebug('privacy.html');
});

// Serve terms.html in /terms
app.get('/terms', function(req, res) {
	res.renderDebug('terms.html');
});

// Serve builder.html in /builder
app.get('/build', function(req, res) {
	res.renderDebug('builder.html');
});

// Serve examples/
app.get('/multi', function(req, res) {
	res.renderDebug('examples/multi.html');
});
app.get('/adventure', function(req, res) {
	res.renderDebug('examples/adventure.html');
});
app.get('/agency', function(req, res) {
	res.renderDebug('examples/agency.html');
});
app.get('/fitness', function(req, res) {
	res.renderDebug('examples/fitness.html');
});
app.get('/cater', function(req, res) {
	res.renderDebug('examples/cater.html');
});
app.get('/learn', function(req, res) {
	res.renderDebug('examples/learn.html');
});
app.get('/news', function(req, res) {
	res.renderDebug('examples/news.html');
});

// Upload route handler
app.post("/upload", function(req, res, next){ 
	if (req.files) { 
		console.log(util.inspect(req.files));
		if (req.files.myFile.size === 0) {
		            return next(new Error("Please select a file."));
		}
		fs.exists(req.files.myFile.path, function(exists) { 
			if(exists) { 
				res.end("We uploaded your landing page!"); 
			} else { 
				res.end("Well, there is no magic for those who don’t believe in it!"); 
			} 
		}); 
	} 
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
app.use(multer({
	dest: __dirname + '/../views/', // this is where new pages are uploaded via Multer
	rename: function (fieldname, filename) {
    	return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  	},
	onFileUploadStart: function (file, req, res) {
  		console.log(file.fieldname + ' is starting to upload...')
	},
	onFileUploadComplete: function (file, req, res) {
  		console.log(file.fieldname + ' uploaded to  ' + file.path)
	},
	onFilesLimit: function () {
  		console.log('You crossed the file limit! Are you adding an HTML file?')
	}
})); 


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