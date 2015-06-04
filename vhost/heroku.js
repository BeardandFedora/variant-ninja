module.exports = function(app, stormpath) {

	// Serve custom pages being hosted here
    //Serve code-wrangler.html 
    app.get('/code-wrangler', function(req, res) {
        res.renderDebug('code-wrangler.html');
    });    
	app.get('/traction-engineer', function(req, res) {
        res.renderDebug('traction-engineer.html');
    });
	app.get('/ghost-growth', function(req, res) {
        res.renderDebug('ghost-growth.html');
    });
	app.get('/-moz-fe-engineer:true', function(req, res) {
        res.renderDebug('mozilla-frontend-engineer.html');
    });
	app.get('/full-stack-passion', function(req, res) {
        res.renderDebug('full-stack-passion.html');
    });
	app.get('/make-stuff-go', function(req, res) {
        res.renderDebug('make-stuff-go.html');
    });
	
};