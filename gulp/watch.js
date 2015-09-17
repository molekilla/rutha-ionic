'use strict';

var path = require('path');
var gulp = require('gulp');
var config = require('./gulp.config');
var $ = require('gulp-load-plugins')({ lazy:true });

gulp.task('watch', function() {
  gulp.watch(config.allSass, ['sass']);
  //gulp.watch(config.concatDev, ['build']);
});
