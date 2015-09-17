//  // server dev environment no auto refresh for ionic
//  grunt.registerTask('ionic', Help.serve,
//    ['babel:dev', 'preprocess:html', 'ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:devIonic',
//     'bower_concat:dev', 'wiredep:dev', 'copy:devCssImages', 'copy:devFonts',
//     'copy:devImages', 'copy:ionicIndex', 'cssmin:dependencies', 'cssmin:dev', 'copy:devAssets', 'concurrent:dev']);



'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
