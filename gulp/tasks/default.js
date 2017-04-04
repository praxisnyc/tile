var gulp = require('gulp'),
runSequence = require('run-sequence'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('default', function(callback) {
  runSequence(
    'clean',
    'nunjucks',
    ['browserSync', 'watch'],
    callback
    );
});
