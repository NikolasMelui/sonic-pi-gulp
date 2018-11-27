'use strict';

const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('music', () => exec('cat ./music.rb | sonic_pi'));

gulp.task('watch', () => {
  gulp.watch('./**/*.rb', { usePolling: true }, gulp.series('music'));
});

gulp.task('default', gulp.series('watch'));
