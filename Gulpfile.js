/* Hold on now, this gets wild in 102ms (joel s)
 *
 *
 * To debug, uncomment: var debug = require('gulp-debug');
 * For verbose debugging: change to .pipe(debug({verbose: true}))
 * Debug Help: https://github.com/sindresorhus/gulp-debug
 * For Gulp Help: http://gulpjs.com
*/

/* jshint -W015 */
var gulp = require('gulp');
var debug = require('gulp-debug');
var util = require('gulp-util');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var rename = require("gulp-rename");
var inject = require('gulp-inject');
var less = require('gulp-less');
var replace = require('gulp-replace');
var bump = require('gulp-bump');
var childProcess = require('child_process');
var runSequence = require('run-sequence');
var fs = require('fs');


/** __________________________________________
 * constants.js
 */
function getVersion() {
	var packageJson = JSON.parse(fs.readFileSync(__dirname + '/package.json', {
		encoding: 'utf8'
	}));
	return packageJson.version;
}

gulp.task('constants', function() {
	return gulp.src('./app/constants.js')
		.pipe(replace(/constants\.VERSION = .*/, 'constants.VERSION = "' + getVersion() + '";'))
        //.pipe(debug())
		.pipe(gulp.dest('./public/js/app'));
});

/** __________________________________________
 * JSHint
 */

gulp.task('jshint', function() {
	return gulp.src([
		'./app/**/*.js',
		'./src/js/vendor/**/*.js',
		'./src/js/**/*.js',
		'./src/builder/theme/js/**/*.js'
	])
		// .pipe(debug())
        .pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

/** __________________________________________
 * RequireJS
 */

gulp.task('clean-js', function() {
	return gulp.src([
		'./public/js/bootstrap/*.js',
		'./public/js/vendor/*.js',
		'./public/js/*.js'
	])
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('clean-builder-js', function() {
	return gulp.src([
		'./public/builder/js/*.js',
		'./public/builder/theme/js/*.js'
	])
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('clean-angular-js', function() {
	return gulp.src([
		'./public/js/angular*.js'
	])
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('clean-variant-js', function() {
	return gulp.src([
		'./public/variant.min.js'
	])
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('builder-js', ['clean-builder-js'], function() {
	return gulp.src([
		'./src/builder/theme/js/flexslider.min.js',
		'./src/builder/theme/js/smooth-scroll.min.js',
		'./src/builder/theme/js/placeholders.min.js',
		'./src/builder/theme/js/twitterfetcher.min.js',
		'./src/builder/theme/js/spectragram.min.js',
		'./src/builder/js/alterClass.js',
		'./src/builder/js/jquery-ui-1.10.4.custom.min.js',
		'./src/builder/js/storage2.js',
		'./src/builder/js/reInit.js',
		'./src/builder/js/simpleModal.js',
		'./src/builder/js/jsZip.js',
		'./src/builder/js/saveAs.js',
		'./src/builder/js/init.js'
		
	])
		// .pipe(debug())
       .pipe(concat('builder.js'))
	   .pipe(rename({suffix: '.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('./public/builder/js/'));
});

gulp.task('angular-js', ['clean-angular-js'], function() {
	return gulp.src([
		'./src/js/angular/angulartics.min.js',
		'./src/js/angular/angulartics-ga.min.js',
		'./src/js/angular/angulartics-gtm.min.js',
		'./src/js/angular/analytics-app.js'
		
	])
		// .pipe(debug())
       .pipe(concat('angulartics.js'))
	   .pipe(rename({suffix: '.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('./public/js/'));
});

gulp.task('variant-js', ['clean-variant-js'], function() {
	return gulp.src([
		'./src/js/flexslider.min.js',
		'./src/js/smooth-scroll.min.js',
		'./src/js/placeholders.min.js',
		'./src/js/twitterfetcher.min.js',
		'./src/js/spectragram.min.js',
		'./src/js/jquery.easing.1.3.js',
		'./src/js/velocity.min.js',
		'./src/js/form-plugins.js',
		'./src/js/scripts.js',
		'./src/js/main.js'
		
	])
		// .pipe(debug())
       .pipe(concat('variant.js'))
	   .pipe(rename({suffix: '.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('./public/js/'));
});

gulp.task('copy-js', ['clean-js'], function() {
	return gulp.src([
		'./src/js/vendor/*.js',
		'./src/js/*.js'
	])
		// .pipe(debug())
       .pipe(uglify())
       .pipe(gulp.dest('./public/js/'));
});

/** __________________________________________
 * Less
 */

gulp.task('clean-less', function() {
	return gulp.src('./public/css/main.css')
		// .pipe(debug())
        .pipe(clean());
});
gulp.task('clean-css', function() {
	return gulp.src('./public/css/main.min.css')
		// .pipe(debug())
        .pipe(clean());
});
gulp.task('clean-theme', function() {
	return gulp.src('./public/css/theme*.css')
		// .pipe(debug())
        .pipe(clean());
});
gulp.task('clean-builder-theme', function() {
	return gulp.src('./public/builder/theme/css/**/*')
		// .pipe(debug())
        .pipe(clean());
});
gulp.task('clean-builder-less', function() {
	return gulp.src('./public/builder/css/**/*')
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('less', ['clean-less'], function() {
	return gulp.src([
		'./src/less/main.less'
		// './src/less/themes/*.less'
	])
		.pipe(less({
			compress: true
		}))
		// .pipe(debug())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('css', ['clean-css'], function() {
	return gulp.src([
		'./src/css/icons.min.css',
		'./src/css/flexslider.min.css',
		'./src/css/custom.css'
	])
		
		// .pipe(debug())
		.pipe(concatCss("main.css"))
		.pipe(rename({suffix: '.min'}))
	    .pipe(less({
			compress: true
		}))
        .pipe(gulp.dest('./public/css/'));
});
// needs t away in favor of LESS
gulp.task('css-theme', ['clean-theme'], function() {
	return gulp.src([
		'./src/css/theme*.css'
	])
		
		// .pipe(debug())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('builder-theme', ['clean-builder-theme'], function() {
	return gulp.src([
		'./src/builder/theme/css/*.css'
	])
		
		// .pipe(debug())
        .pipe(gulp.dest('./public/builder/theme/css/'));
});

gulp.task('builder-less', ['clean-builder-less'], function() {
	return gulp.src([
		'./src/builder/css/*.css'
	])
		
		// .pipe(debug())
		.pipe(concatCss("variant.css"))
	    .pipe(rename({suffix: '.min'}))
		.pipe(less({
			compress: true
		}))
        .pipe(gulp.dest('./public/builder/css/'));
});

/** __________________________________________
 * Fonts
 */

gulp.task('clean-font', function() {
	return gulp.src([
		'./public/fonts/**/*'
	])
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('clean-builder-font', function() {
	return gulp.src([
		'./public/builder/fonts/**/*'
	])
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('copy-font', ['clean-font'], function() {
	return gulp.src([
        './src/fonts/*'
    ])
		// .pipe(debug())
        .pipe(gulp.dest('./public/fonts/'));
});

gulp.task('builder-font', ['clean-builder-font'], function() {
	return gulp.src([
        './src/builder/fonts/*',
		'./src/fonts/*'
    ])
		// .pipe(debug())
        .pipe(gulp.dest('./public/builder/fonts/'));
});

/** __________________________________________
 * Images
 */

gulp.task('clean-img', function() {
	return gulp.src('./public/img/**/*')
		// .pipe(debug())
        .pipe(clean());
});


gulp.task('clean-builder-img', function() {
	return gulp.src('./public/builder/img/**/*')
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('copy-img', ['clean-img'], function() {
	return gulp.src('./src/img/*')
		// .pipe(debug())
        .pipe(gulp.dest('./public/img/'));
});

gulp.task('builder-img', ['clean-builder-img'], function() {
	return gulp.src('./src/builder/img/**/*')
		// .pipe(debug())
        .pipe(gulp.dest('./public/builder/img/'));
});

/** __________________________________________
 * cache.manifest
 */

gulp.task('cache', function() {
	return gulp.src('./public/cache.manifest')
		.pipe(replace(/(#Date ).*/, '$1' + Date()))
		.pipe(replace(/(#Version ).*/, '$1' + getVersion()))
		.pipe(inject(gulp.src([
				'./builder/css/**/*.*',
				'./builder/js/**/*.*',
				'./builder/fonts/**/*.*',
				'./builder/img/**/*.*',
				'./builder/themes/css/**/*.css',
				'./builder/themes/fonts/**/*.*',
				'./builder/themes/img/**/*.*',
				'./img/**/*.*',
				'./fonts/**/*.*',
				'./js/**/*.*',
				'./styles/**/*.*',
				'./css/**/*.*'
			], {
				read: false,
				cwd: './public'
			}),
			{
				starttag: '# start_inject_resources',
				endtag: '# end_inject_resources',
				ignoreExtensions: true,
				transform: function(filepath) {
					return filepath.substring(1);
				}
			}))
		// .pipe(debug())
        .pipe(gulp.dest('./public/'));
});


gulp.task('clean', [
	'clean-js',
	'clean-builder-js',
	'clean-angular-js',
	'clean-variant-js',
	'clean-less',
	'clean-builder-theme',
	'clean-builder-less',
	//'clean-img',
	//'clean-builder-img'
	'clean-font',
	'clean-builder-font'
]);

gulp.task('default', function(cb) {
	runSequence([
//			'jshint',
			'builder-js',
			'angular-js',
			'variant-js',
			'copy-js',
			'less',
			'css',
			'builder-theme',
			'builder-less',
			'copy-font',
			'builder-font',
			'builder-img',
			'copy-img',
			'cache'
		],
		cb);
});

function bumpTask(importance) {
	return function() {
		return gulp.src([
			'./package.json',
			'./bower.json'
		])
			.pipe(bump({type: importance}))
            // .pipe(debug())
			.pipe(gulp.dest('./'));
	};
}

gulp.task('bump-patch', bumpTask('patch'));
gulp.task('bump-minor', bumpTask('minor'));
gulp.task('bump-major', bumpTask('major'));

function exec(cmd, cb) {
	childProcess.exec(cmd, {cwd: process.cwd()}, function(err, stdout, stderr) {
		if(!err) {
			util.log(stdout, stderr);
		}
		cb(err);
	});
}

gulp.task('git-tag', function(cb) {
	var tag = 'v' + getVersion();
	util.log('Tagging as: ' + util.colors.cyan(tag));
	exec('git add ./public', function(err) {
		if(err) {
			return cb(err);
		}
        exec('git commit -a -m "Prepared & released: "' + tag + '.', function(err) {
			if(err) {
				return cb(err);
			}
			exec('git tag -a ' + tag + ' -m "Version ' + getVersion() + '"', function(err) {
				if(err) {
					return cb(err);
				}
				exec('git push github master --tags', cb); // joel s - this is NOT ideal, where we hard code the git direction...needs elegance
			});
		});
	});
});

function releaseTask(importance) {
	return function(cb) {
		runSequence(
			'bump-' + importance,
			//'default', // THIS HAS NOT BEEN TESTED APRIL 29
			'git-tag',
			cb);
	};
}


/*
 * Beep, Boop, or Bop New Labster Releases using gulp-bump
 *
*/

gulp.task('beep', releaseTask('patch'));     // beep
gulp.task('boop', releaseTask('minor'));     // boop
gulp.task('bop', releaseTask('major'));     // bop
