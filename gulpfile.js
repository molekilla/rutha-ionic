//  // server dev environment no auto refresh for ionic
//  grunt.registerTask('ionic', Help.serve,
//    ['babel:dev', 'ngtemplates:dev', ['concat:dev', 'ngAnnotate:dev'], 'uglify:devIonic',
//     'bower_concat:dev', 'copy:devCssImages', 'copy:devFonts',
//     'copy:devImages', 'copy:ionicIndex', 'cssmin:dependencies', 'cssmin:dev', 'copy:devAssets']);



'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


// Task
gulp.task('default', ['ngtemplates', 'concat', 'copy', 'sass', 'watch'], function() {

});
