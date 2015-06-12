var gulp = require('gulp');
var jadeInheritance = require('gulp-jade-inheritance');
var jade = require('gulp-jade');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['templates','copy_main']);

gulp.task('compile_jade', function(){
    gulp.src('./app/views/index.jade')
        .pipe(jadeInheritance({basedir:'app/views'}))
        .pipe(jade())
        .pipe(gulp.dest('dist/views'));
});

gulp.task('browserify',function(){
    var b = browserify({
        entries: ['./app/scripts/main.js'],
        debug: true,
        bundleExternal:false
    });

    return b.bundle()
       .pipe(source('bundle.js'))
       .pipe(gulp.dest('dist/js/'));
});


gulp.task('copy', function(){
    gulp.src('./app/app.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch(['./app/views/*.jade'],['compile_jade']);
    gulp.watch(['./app/app.js'],['copy']);
    gulp.watch(['./app/scripts/main.js'],['browserify']);
    gulp.watch(['./app/scripts/components/*'],['browserify']);
});
