'use strict';
var browserify = require('browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var to5 = require('6to5ify');
var webserver = require('gulp-webserver');

gulp.task('styles', function () {
	return gulp.src('./src/sass/main.scss')
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: ['./src/scss'],
		}))
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('js', function() {
	browserify('./src/js/main.jsx', {transform: to5, debug: true})
		.transform(to5)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch('src/js/**/*.js*', ['js']);
});

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			port: '4412',
		}));
});

gulp.task('default',['styles', 'js', 'watch', 'webserver']);
