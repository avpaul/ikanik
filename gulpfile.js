'use strict';

var gulp = require('gulp');
var scss = require('gulp-scss');
var watch = require('gulp-watch');
var server = require('gulp-live-server');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

var paths = {
    js: ['./src/js/**/*.js'],
    scss: ['./src/scss/**/*scss'],
    dest: './app',
    destjs: './app/js',
    destcss: './app/css'
};



/** ========== GULP TASKS ========== **/

var scss = function() {
    return gulp.src('./public/styles/scss/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./public/styles/css')).pipe(browserSync.stream());
}

gulp.task('scss', scss);

gulp.task('watch-scss', function() {
    return gulp.watch('./public/styles/scss/**/*.scss', gulp.series('scss'));
});
var browser = function() {
    var stream = browserSync.init({
        files: ['./'],
        browser: 'chrome',
        proxy: 'http://localhost:3000',
        port: '3001'
    });
    return stream;
}

gulp.task('browser-sync', browser);

var express;
gulp.task('server', function(cb) {
    express = server.new('./');
    cb();
});
var restart = function(cb) {
    express.start.bind(express)();
    cb();
}
gulp.task('restart', restart);

gulp.task('build', gulp.series('scss', 'restart', gulp.parallel('browser-sync', 'watch-scss')));
gulp.task('default', gulp.series('server', 'build'));