// function defaultTask(cb){
//     console.log("hello world");
//     cb();
// }

// exports.default=defaultTask;


// gulp.task('default',['defaultTask', 'defaultTask2'] );

// function defaultTask(done){
//     console.log("i am gulp hello world.");
//     done();
// }

// function defaultTask2(done){
//     console.log("i am gulp hello world.");
//     done();
// }

// gulp.task('sass-file-one', function () {
//     console.log('compiled sass-file-one')
// });
// gulp.task('sass-file-two', function () {
//     console.log('compiled sass-file-two')
// });

// gulp.task('compile-all-sass', ['sass-file-one','sass-file-two']);
const { parallel } = require('gulp');

const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  console.log("i am clean")
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  console.log("i am build")

  cb();
}

// exports.build = build;
exports.default = parallel(clean, build);