var gulp = require('gulp'),
browserSync = require('browser-sync'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch([
    config.main.src + config.nunjucks.watch,
    config.main.src + config.nunjucks.src,
    config.main.src + config.nunjucks.data
    ], ['nunjucks']);
});
