'use strict';

var path = require('path');
var gulp = require('gulp');
var config = require('./gulp.config');
var $ = require('gulp-load-plugins')({ lazy:true });

gulp.task('styles', function() {
    gulp.src(config.allSass)
        .pipe($.sass())
        .pipe($.csso())
        .pipe(gulp.dest(config.build + 'css/'));
});
