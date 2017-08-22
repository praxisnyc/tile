"use strict";

var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('svg', function () {
    return gulp.src('./svg/illustrator/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./svg/converted'));
});