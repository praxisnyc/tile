'use strict';

var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var del = require('del');
var replace = require('gulp-replace');

gulp.task('clean', function () {
  return del(['./svg/replaced/*.svg', './svg/converted/*.svg', './tile.sass', './tile.scss']);
});

gulp.task('svg', function () {
    return gulp.src('./svg/illustrator/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./svg/converted'));
});


gulp.task('replace', function(){
  gulp.src(['./svg/converted/*.svg'])
    .pipe(replace(' xmlns="http://www.w3.org/2000/svg"', ''))
    .pipe(replace(' id="Layer_1"', ''))
    .pipe(replace(' viewBox="-251 358.5 36 36"', ''))
    .pipe(replace(' viewBox="-239 346.5 36 36"', ''))
    .pipe(replace('.st0{enable-background:new}', ''))
    .pipe(replace('.st1{fill:red}', ''))
    .pipe(replace('<style>', ''))
    .pipe(replace('</style>', ''))
    .pipe(replace(' font-size="12"', ''))
    .pipe(replace(' font-family="ArialMT"', ''))
    .pipe(replace(' viewBox="-252 359.5 10 10"', ''))
    .pipe(replace(' transform="translate(-251 351.272)"', ''))
    .pipe(replace(' viewBox="-251 358.5 12 12"', ''))
    .pipe(replace('.st1{enable-background:new}', ''))
    .pipe(replace('.st0{fill:red}', ''))
    .pipe(replace(' transform="translate(-239 339.272)"', ''))
    .pipe(replace(' transform="translate(-478 685.771)"', ''))
    .pipe(replace(' transform="translate(-717 1032.272)"', ''))
    .pipe(replace(' transform="translate(-252 352.272)"', ''))
    .pipe(replace(' transform="translate(-502 709.771)"', ''))
    .pipe(replace('class="st1"', 'class="#{$color}"'))
    .pipe(replace('class="st0"', 'class="#{$color}"'))
    .pipe(replace('<', '%3C'))
    .pipe(replace('>', '%3E'))
    .pipe(replace(' ', '%20'))
    .pipe(replace('=', '%3D'))
    .pipe(replace('"', '%27'))
    .pipe(replace('%3C/svg%3E', '%3C?/svg%3E\'\)\;\n\}'))
    .pipe(replace('%3Csvg%3E%3Ctext%3E', '\n@if $tile == \''))
    .pipe(replace('%3C/text%3E', '\' {\n$background-image: url(\'data:image/svg+xml,%3Csvg%3E'))
    .pipe(gulp.dest('./svg/replaced/'));
});

gulp.task('make', function() {
  return gulp.src(['./svg/replaced/aaa.txt', './svg/replaced/*.svg', './svg/replaced/zzz.txt'])
    .pipe(concat('tile.scss'))
    .pipe(gulp.dest('./'));
});

// gulp.task('default', function(done) {
//     runSequence(['clean'], ['svg', 'replace', 'make-sass'], done);
// });