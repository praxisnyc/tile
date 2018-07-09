'use strict';

var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var del = require('del');
var replace = require('gulp-replace');
var svgToSss = require('gulp-svg-css');
var converter = require('sass-convert');

gulp.task('clean', function () {
  return del(['./svg/replaced/tile.css', './svg/converted/*.svg', './tile.sass', './tile.scss']);
});

gulp.task('svg', function () {
    return gulp.src('./svg/sketch/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./svg/converted'));
});


 gulp.task('svg2', function () {
gulp.src('./svg/converted/*.svg')
.pipe(svgToSss({
    //name:'tile.css',
    fileName:'tile',
    cssPrefix: 'removethis',
    template: "\n\n  @if $tile == \"{{filename}}\" {\n    background-image: url(\"{{dataurl}}\");\n  }"
}))
.pipe(gulp.dest('./svg/replaced/'));
});

 gulp.task('replace', function(){
  gulp.src(['./svg/replaced/tile.css'])
    // .pipe(replace('fill%3Ared', 'fill%3A\" + $color + \"'))
    .pipe(replace('%23F00', '\" + $color + \"'))
    .pipe(replace('data:image&#x2F;svg+xml,', 'data:image/svg+xml,'))
    .pipe(replace('.removethis', '  @if $tile == \"'))
    .pipe(replace('-a {', '-a\" {'))
    .pipe(replace('-b {', '-b\" {'))
    .pipe(replace('-c {', '-c\" {'))
    .pipe(gulp.dest('./svg/replaced/'));
});

 gulp.task('make', function() {
  return gulp.src(['./svg/replaced/aaa.txt', './svg/replaced/tile.css', './svg/replaced/zzz.txt'])
    .pipe(concat('tile.scss'))
    .pipe(gulp.dest('./'));
});



// gulp.task('svgtobg', function(){
//   gulp.src(['./original/test.scss'])
//     .pipe(replace('<', '%3C'))
//     .pipe(replace('>', '%3E'))
//     .pipe(replace(' ', '%20'))
//     .pipe(replace('=', '%3D'))
//     .pipe(replace('"', '%27'))
//     .pipe(replace('-', '%2C'))
//     .pipe(replace('\'', '%22'))
//     .pipe(replace('\n', '%0A'))
//     .pipe(gulp.dest('./original/'));
// });

gulp.task('bgtosvg', function(){
  gulp.src(['./original/test.scss'])
    .pipe(replace('%3C', '<'))
    .pipe(replace('%3E', '>'))
    .pipe(replace('%20', ' '))
    .pipe(replace('%3D', '='))
    .pipe(replace('%27', '"'))
    .pipe(replace('%2C', '-'))
    .pipe(replace('%22', '\''))
    .pipe(replace('%0A', '\n'))
    .pipe(gulp.dest('./original/'));
});

gulp.task('default', function(done) {
    runSequence(['clean'], ['svg'], ['svg2'], ['replace'], ['make'], done);
});

// gulp.task('make', function() {
//   return gulp.src(['./svg/replaced/aaa.txt', './svg/replaced/*.svg', './svg/replaced/zzz.txt'])
//     .pipe(concat('tile.scss'))
//     .pipe(gulp.dest('./'));
// });


// gulp.task('default', function(done) {
//     runSequence(['clean'], ['svg', 'replace', 'make-sass'], done);
// });