var express = require('express');
var app = express();
var router = express.Router();

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

/* *****************************************************************************
 * Error Pages
 * 
 * Let's use custom error pages for the most common error codes with http
 * 
 * *****************************************************************************
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



module.exports = router;
