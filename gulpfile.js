var gulp = require('gulp');
var jadeInheritance = require('gulp-jade-inheritance');
var jade = require('gulp-jade');

gulp.task('default', ['templates','copy_main']);

gulp.task('templates', function(){
    gulp.src('./app/views/index.jade')
        .pipe(jadeInheritance({basedir:'app/views'}))
        .pipe(jade())
        .pipe(gulp.dest('dist/views'));
});

gulp.task('copy', function(){
    gulp.src('./app/main.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch(['./app/views/*.jade'],['templates']);
    gulp.watch(['./app/main.js'],['copy']);
});
