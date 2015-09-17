'use strict';

var path = require('path');
var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy:true });

gulp.task('watch', function() {
  gulp.watch(config.watch.sass, ['sass']);
  gulp.watch(config.templates, ['ngtemplates']);
  gulp.watch(config.concatDev, ['concat']);
  gulp.watch([config.copyAssets.index, config.copyAssets.fonts, config.copyAssets.fonts, config.copyAssets.assets], ['copy']);
});
