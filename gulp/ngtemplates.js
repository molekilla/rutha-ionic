'use strict';

var path = require('path');
var gulp = require('gulp');
var config = require('./gulp.config');
var $ = require('gulp-load-plugins')({ lazy:true });

gulp.task('templatecache', function() {
    log('Creating AngularJS $templateCache');

    return gulp
        .src(config.templates)
        .pipe($.minifyHtml({empty: true, quotes: true}))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
            ))
        .pipe(gulp.dest(config.temp));
});
