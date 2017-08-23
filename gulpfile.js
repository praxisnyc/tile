"use strict";

var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var runSequence = require("run-sequence");
var del = require('del');
var replace = require('gulp-replace');

gulp.task('clean-svg', function () {
  return del(['./svg/converted/*.svg']);
});

gulp.task('svg', function () {
    return gulp.src('./svg/illustrator/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./svg/converted'));
});

gulp.task('make-sass', function() {
  return gulp.src(['./svg/converted/aaa.txt', './svg/converted/*.svg', './svg/converted/zzz.txt'])
    .pipe(concat('tile.sass'))
    .pipe(gulp.dest('./'));
});



// gulp.task('templates', function(){
//   gulp.src(['file.txt'])
//     .pipe(replace('bar', 'foo'))
//     .pipe(gulp.dest('build/'));
// });

gulp.task("default", function(done) {
    runSequence("clean-svg", "svg", "make-sass", done);
});