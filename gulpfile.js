var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    rev = require('gulp-rev-append');   
 
//home模版压缩
gulp.task('Htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('view/development/*/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('view/production'));
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