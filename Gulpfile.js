var concat = require('gulp-concat');
var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('sass', function () {
	gulp.src('./src/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: ['./src'],
		}))
  		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
	gulp
		.src([
			'bower_components/localforage/dist/localforage.js',
			'bower_components/lodash/dist/lodash.js',
			'bower_components/angular/angular.js',
			'src/third-party/third-party.js',
			'src/main.js',
			'src/**/*.js',
		])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		//.pipe(uglify())
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('./build'));
})

gulp.task('watch', function() {
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/**/*.js', ['js']);
});

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			open: false,
			port: '4412',
		}));
});

gulp.task('default',['sass', 'js', 'watch', 'webserver']);
