var gulp 		= require('gulp');
var config 		= require('./gulp.config')();
var del 		= require('del');
var path        = require('path');
var args		= require('yargs').argv;
var $		    = require('gulp-load-plugins')({ lazy:true });


gulp.task('clean', function(done) {

    var delconfig;
    if(args.path)
    {
       delconfig = args.path;
    }else{
      delconfig = [].concat(config.build, config.temp);
    }

    console.log('Cleaning: ' + $.util.colors.blue(delconfig));
    del(delconfig, done);
});
