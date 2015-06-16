var gulp = require('gulp');
var jadeInheritance = require('gulp-jade-inheritance');
var jade = require('gulp-jade');
var less = require('gulp-less');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['compile','browserify','copy']);

gulp.task('compile', ['compile_jade', 'compile_less']);

gulp.task('compile_jade', function(){
    gulp.src('./app/views/index.jade')
        .pipe(jadeInheritance({basedir:'app/views'}))
        .pipe(jade())
        .pipe(gulp.dest('dist/views'));
    gulp.src('./app/views/templates/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist/views/templates'));
});

gulp.task('compile_less', function(){
    gulp.src('./app/styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
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
