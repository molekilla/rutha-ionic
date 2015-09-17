'use strict';

var path = require('path');
var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy:true });

gulp.task('copy', function(){
    gulp.src(config.copyAssets.index)
        .pipe(gulp.dest(config.build));

    gulp.src(config.copyAssets.images)
        .pipe(gulp.dest(config.build + '/img'));

    gulp.src(config.copyAssets.fonts)
        .pipe(gulp.dest(config.build + '/fonts'));

    gulp.src(config.copyAssets.assets)
        .pipe(gulp.dest(config.build));
});
