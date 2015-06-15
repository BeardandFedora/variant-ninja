module.exports = function(app, stormpath) {
//module.exports = function(app) {
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.html'); // load the index.ejs file
    });

	// Serve builder.html in /build
	// Let's also lock this down with stormpath, by directory groups
	//app.get('/build', stormpath.groupsRequired(['Tier 1', 'Tier 2', 'Admin', 'Beta'], false), function(req, res) {
	app.get('/build', stormpath.loginRequired, function(req, res) {
    	res.renderDebug('builder.html');
	});	
	
	
    /* KISS. A keep it simple routing scheme here... forever. This app is intended to
     * be a single page app with meta pages, both of which we can assign routes for.
     */

    /*/ Serve builder
    app.get('/build', function(req, res) {
        res.renderDebug('builder.html');
    });
	*/
	
	
	// Upload route handler
    app.post("/upload", function(req, res, next) {
        if(req.files) {
            console.log(util.inspect(req.files));
            if(req.files.myFile.size === 0) {
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
	app.get('/-patreon-fe-engineer:true', function(req, res) {
        res.renderDebug('patreon-frontend-engineer.html');
    });
	app.get('/full-stack-passion', function(req, res) {
        res.renderDebug('full-stack-passion.html');
    });
	app.get('/make-stuff-go', function(req, res) {
        res.renderDebug('make-stuff-go.html');
    });
	app.get('/product-stack', function(req, res) {
        res.renderDebug('experience-is-the-product.html');
    });
	
	

    // route middleware to make sure a user is logged in

    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if(req.isAuthenticated()) return next();
        // if they aren't redirect them to the home page
        res.redirect('/');
    }

};