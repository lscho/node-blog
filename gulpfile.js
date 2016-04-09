var gulp = require('gulp'),                 //基础库
    minifycss = require('gulp-minify-css'), //css压缩
    uglify = require('gulp-uglify'),        //js压缩     
    rename = require('gulp-rename'),        //文件重命名
    minifyejs = require('gulp-minify-ejs'), //压缩html[esj模版]
    upload = require('gulp-qndn').upload,   //七牛上传
    cdn = require('gulp-cdn-replace');      //替换CDN链接

var qnOptions = {
  accessKey: 'xxx',
  secretKey: 'xxx',
  bucket: 'eyblog',
  domain: 'http://7xs3vt.com1.z0.glb.clouddn.com',
  delete:true   //是否清除同名文件
};
gulp.task('script', function() {
    console.log('压缩并上传js...');
    return gulp.src('www/static/js/easyou.js') 
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(upload({qn: qnOptions}))
        .pipe(gulp.dest('www/static/js'));        
});
gulp.task('css', function() {
    console.log('压缩并上传css...');
    return gulp.src(['www/static/css/easyou.css','www/static/css/admin.css'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(upload({qn: qnOptions}))
        .pipe(gulp.dest('www/static/css'));
});
gulp.task('html', function() {
    console.log('压缩html...');
    console.log('更新版本号...');
    return gulp.src('view/development/*/*.html')
        .pipe(cdn({suffix: '.min',root: 'http://7u2sls.com1.z0.glb.clouddn.com'}))    
        .pipe(minifyejs())
        .pipe(gulp.dest('view/production'))
});
gulp.task('default', ['script','css','html']); //定义默认任务