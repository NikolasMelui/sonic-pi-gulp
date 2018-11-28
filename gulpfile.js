'use strict';

const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('play', () => exec('cat ./music.rb | sonic_pi'));

gulp.task('watch', () =>
  gulp.watch('./**/*.rb', { usePolling: true }, gulp.series('play'))
);

gulp.task('default', gulp.series('watch'));
