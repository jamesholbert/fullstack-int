let gulp = require('gulp');
let run = require('gulp-run');
 
// use gulp-run to start a pipeline 
gulp.task('app', function() {
  return run('python ../app.py').exec();
})


gulp.task('npm', function() {
  return run('npm start').exec();
})


gulp.task('default', ['app', 'npm'], () => {
	return;
});

