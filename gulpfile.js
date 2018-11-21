var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', () => {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT: 8000
    },
    ignore: ['./node_modules/**']
  })
  .on.apply('restart', () => {
    console.log('Restarting server...')
  })
});