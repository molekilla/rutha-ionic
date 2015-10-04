'use strict';


var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy:true });
var mainBowerFiles = require('main-bower-files');

gulp.task('concat', function() {

  var opts = {
      paths: {
          bowerDirectory: config.bowerComponents
      }
  };

  // deps.js
  return gulp.src(mainBowerFiles(opts))
    .pipe($.concat('deps.js'))
    //.pipe($.uglify())
    .pipe(gulp.dest(config.build + 'js/'));

  // app.js
//  return gulp.src(config.concatDev)
//    .pipe($.concat('app.js'))
//    .pipe($.ngAnnotate())
//    .pipe(gulp.dest(config.build + 'js/'));
});
