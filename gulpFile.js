var gulp = require('gulp'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

gulp.task('dev-sass', function() {
  gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('demo/css/'));
});

gulp.task('watch-sass', function (){
  gulp.watch('src/scss/*.scss', ['dev-sass']);
});

gulp.task('dist-sass', function() {
  gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest('dist/'));
});

gulp.task('dist-js', function() {
  gulp.src('src/js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({preserveComments: "license"}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build-dist', ['dist-sass', 'dist-js']);
