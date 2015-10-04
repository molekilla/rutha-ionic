'use strict';

var path = require('path');
var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy:true });

gulp.task('copy', function(){
    // Index HTML
    gulp.src(config.copyAssets.index)
        .pipe(gulp.dest(config.build));

    // Images
    gulp.src(config.copyAssets.images)
        .pipe(gulp.dest(config.build + '/img'));

    // Fonts
    gulp.src(config.copyAssets.fonts)
        .pipe(gulp.dest(config.build + '/fonts'));

    // Assets
    return gulp.src(config.copyAssets.assets)
        .pipe(gulp.dest(config.build));
});
