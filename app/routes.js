// app/routes/index.js
module.exports = function(app, passport) {
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.html'); // load the index.ejs file
    });
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.html', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.html', {
            user : req.user // get the user out of session and pass to template
        });
    });
	// =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.html', {
            message: req.flash('loginMessage')
        });
    });
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/build', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    /* KISS. A keep it simple routing scheme here... forever. This app is intended to
     * be a single page app with meta pages, both of which we can assign routes for.
     */
    // Load the builder if the user is authenticated
    app.get('/secure-build', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if(err) {
                return next(err);
            }
            if(!user) {
                return res.redirect('/login');
            }
            req.logIn(user, function(err) {
                if(err) {
                    return next(err);
                }
                return res.redirect('/build/');
            });
        })(req, res, next);
    });

    // Serve builder
    app.get('/build', function(req, res) {
        res.renderDebug('builder.html');
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
};

    // route middleware to make sure a user is logged in

    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if(req.isAuthenticated()) return next();
        // if they aren't redirect them to the home page
        res.redirect('/');
    }
