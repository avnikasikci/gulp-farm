/*lessson 1*/
/*Gulp file read console hello word*/
function defaultTask(cb) {
  // place code for your default task here
  console.log("hello word welcome lesson 1");
  cb();
}
/*Lesson 2 Copy and paste files*/
// copyTo.js v1
function copyTo(files, dest) {
  if (typeof files == 'string') {
    files = [files];
  };
  gulp.src(files).pipe(gulp.dest(dest));
  console.log(cliDate() + ' copyTo success');
};

// cliDate.js v1
function cliDate() {
  let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  hours < 10 ? hours = '0' + hours : hours;
  minutes < 10 ? minutes = '0' + minutes : minutes;
  seconds < 10 ? seconds = '0' + seconds : seconds;
  let result='[' + hours + ':' + minutes + ':' + seconds + ']'
  console.log(result);
  return result;
};

var gulp = require('gulp');

// Keeps watching for amended files
var watch = require('gulp-watch');

var paths = {
    source: './dist',
    destination: './public'
};

gulp.task('default', ['watch-amended-folder']);

gulp.task('watch-amended-folder', function() {

    return gulp.src(paths.source + '/**/*', {base: paths.source})
        .pipe(watch(paths.source, {base: paths.source}))
        .pipe(gulp.dest(paths.destination));
});


exports.default = copyTo