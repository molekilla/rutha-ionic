'use strict';


var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy:true });

gulp.task('concat', function() {

  return gulp.src(config.concatDev)
    .pipe($.concat('app.js'))
    .pipe($.ngAnnotate())
    .pipe(gulp.dest(config.build + 'js/'));
});
