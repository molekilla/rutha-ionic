var ts = require('gulp-typescript');
var merge = require('merge2');
var gulp = require('gulp');

var tsProject = ts.createProject(require(__dirname + '/../tsconfig'));


gulp.task('typescript', function() {
    var tsResult = gulp.src('./src/app/**/*.ts').pipe(ts(tsProject));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest('./www/definitions')),
        tsResult.js.pipe(gulp.dest('./www/js'))
    ]);
});
