'use strict';
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var extend = require('lodash/object/extend');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var server = require('gulp-develop-server');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watchify = require('watchify');

var prod  = (gutil.env.prod==='true');
gutil.log('Production mode:', prod);

//JS build task
var bundlerOpts = extend({}, watchify.args, {
	debug: !prod,
	extensions: ['.jsx'],
	paths: ['./client/js/'],
});
var bundler = watchify(browserify('./client/js/main.jsx', bundlerOpts));

bundler.transform(babelify);
gulp.task('js', rebundle);
bundler.on('update', rebundle);
bundler.on('log', gutil.log);

function rebundle() {
	var fileName = 'bundle'+(prod ? '.min' : '')+'.js';
	return bundler.bundle()
		.on('error', swallowError)
		.pipe(source(fileName))
		.pipe(buffer())
		.pipe(gulpif(prod, uglify()))
		.pipe(gulpif(!prod, sourcemaps.init({loadMaps: true})))
		.pipe(gulpif(!prod, sourcemaps.write('./')))
		.pipe(gulp.dest('./build/'));
}
//end JS build task

gulp.task('styles', function () {
	return gulp.src('./client/sass/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: ['./client/scss'],
		}))
		.on('error', swallowError)
		.pipe(sourcemaps.write())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./build/'))
		.on('error', swallowError);
});

gulp.task('watch', function() {
	gulp.watch('client/**/*.scss', ['styles']);
	gulp.watch('./app.js', server.restart);
});

gulp.task('server', function() {
	server.listen({
		path: './app.js',
		args: [
			'--prod',
			prod
		]
	});
});

gulp.task('default',['styles', 'js', 'watch', 'server']);

function swallowError (error) {
	/*jshint validthis:true */
	console.log(error.toString());

	this.emit('end');
}

module.exports = gulp;