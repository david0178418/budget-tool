var concat = require('gulp-concat');
var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
 
gulp.task('sass', function () {
	gulp.src('./src/sass/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: ['./src/scss'],
		}))
  		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
	gulp.src(['libs/angular/angular.js', 'src/js/app.js', 'src/js/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('./build'));
})

gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			open: false,
			port: '4412',
		}));
});

gulp.task('default',['sass', 'js', 'watch', 'webserver']);