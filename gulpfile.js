var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyejs = require('gulp-minify-ejs'),
    rev = require('gulp-rev-append');   
 
//home模版压缩
gulp.task('Htmlmin', function() {
  return gulp.src('view/development/*/*.html')
    .pipe(minifyejs())
    .pipe(gulp.dest('view/production'))
});
//js压缩
gulp.task('script', function() {
    return gulp.src('www/static/js/easyou.js')
        .pipe(rename('easyou.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/static/js'));
});
//css压缩
gulp.task('minifycss', function() {
    return gulp.src('www/static/css/easyou.css')
        .pipe(rename('easyou.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('www/static/css'));

});
//默认任务
gulp.task('default',['Htmlmin','script','minifycss']); //定义默认任务