/* eslint-disable no-var */
var Gulp = require('gulp'),
    Linoleum = require('linoleum');

require('linoleum-electron');
require('linoleum-webpack');

Gulp.task('build:static', function() {
  return Gulp.src('static/**')
    .pipe(Gulp.dest('lib'));
});

Gulp.task('build', ['clean', 'lint'], function(done) {
  Linoleum.runTask(['webpack:electron', 'build:static'], done);
});

Gulp.task('test', ['cover']);
Gulp.task('cover', ['build'], function(done) {
  Linoleum.runTask(['cover:untested', 'cover:electron', 'cover:report'], done);
});

Gulp.task('hot', ['watch:cover'], function() {
  Gulp.start('webpack:dev-server');
});

const WATCH_FILES = Linoleum.jsFiles();
Linoleum.watch(WATCH_FILES, 'cover');

Gulp.task('watch', ['watch:cover']);
Gulp.task('default', ['cover']);
