module.exports = function(app, stormpath) {

	// Serve learn-life-sciences.html in /
    app.get('/campaigns', function(req, res) {
        res.renderDebug('campaigns.html');
    });
    // Serve privacy.html in /privacy
    app.get('/privacy', function(req, res) {
        res.renderDebug('privacy.html');
    });
    // Serve terms.html in /terms
    app.get('/terms', function(req, res) {
        res.renderDebug('terms.html');
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