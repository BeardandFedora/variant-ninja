var vhost = require('vhost');
var flash    = require('connect-flash');
var methodOverride = require('method-override');

module.exports = function(app, express, vhost, stormpath, favicon, path, logger, bodyParser, methodOverride, cookieParser) {
	
/*
 * Load The Virtual Hosts (via vhosts)
*/

/* KISS. A keep it simple vhost architecture here... forever. 
*/

// create vhost ======================================================================
function createVirtualHost(domainName, dirPath) {
    var vhost = express();
	// set up the express vhost application
	// vhost.use(favicon(__dirname + '/../public/' + dirPath + '/favicon.ico'));
	vhost.use(favicon(__dirname + '/../public/favicon.ico'));
	vhost.use(logger('dev'));
	vhost.use(bodyParser.json());
	vhost.use(bodyParser.urlencoded({ extended: false })); //parses request body and populates request.body
    vhost.use(methodOverride() ); //checks request.body for HTTP method overrides
	vhost.use(cookieParser());
	vhost.use(express.static(path.join(__dirname, 'public')));
	vhost.set('views', __dirname + '/../views/' + dirPath); // load views
	require('./' + dirPath + '.js')(app, stormpath); // load routes

    return vhost(domainName, vhost)
	
}

	
	
	
	
	
// Create the vhosts ======================================================================
var variantHost = createVirtualHost("variant.ninja", "variant");

	


	
// Use the vhosts ======================================================================
app.use(variantHost);




	
	
	
	
	

};	
