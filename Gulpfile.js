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
		'./src/js/**/*.js'
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
	return gulp.src('./public/css')
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('less', ['clean-less'], function() {
	return gulp.src([
		'./src/less/main.less',
		'./src/less/themes/*.less'
	])
		.pipe(less({
			compress: true
		}))
		// .pipe(debug())
        .pipe(gulp.dest('./public/css/'));
});

/** __________________________________________
 * Fonts
 */

gulp.task('clean-font', function() {
	return gulp.src('./public/fonts')
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

/** __________________________________________
 * Images
 */

gulp.task('clean-img', function() {
	return gulp.src('./public/img')
		// .pipe(debug())
        .pipe(clean());
});

gulp.task('copy-img', ['clean-img'], function() {
	return gulp.src('./src/img/*')
		// .pipe(debug())
        .pipe(gulp.dest('./public/img/'));
});


/** __________________________________________
 * cache.manifest
 */

gulp.task('cache', function() {
	return gulp.src('./public/cache.manifest')
		.pipe(replace(/(#Date ).*/, '$1' + Date()))
		.pipe(replace(/(#Version ).*/, '$1' + getVersion()))
		.pipe(inject(gulp.src([
				'./builder/**/*.*',
				'./img/**/*.*',
				'./fonts/**/*.*',
				'./js/**/*.*',
				'./video/**/*.*'
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
	'clean-less',
	'clean-font',
	'clean-img'
]);

gulp.task('default', function(cb) {
	runSequence([
//			'jshint',
			'copy-js',
			'less',
			'copy-font',
			'copy-img'
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
				exec('git push heroku master --tags', cb); // joel s - this is NOT ideal, where we hard code the git direction...needs elegance
			});
		});
	});
});

function releaseTask(importance) {
	return function(cb) {
		runSequence(
			'bump-' + importance,
			'default',
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
