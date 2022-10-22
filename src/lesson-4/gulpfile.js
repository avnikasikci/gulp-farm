//var copy = require('../index');
//var copy = require('../../index');
var copy = require('../../node_modules/gulp-copy');

/*this lesson after than*/
//var gulp = require('gulp');
var gulp = require('../../node_modules/gulp');
//var through = require('through2');
var through = require('../../node_modules/through2');

gulp.task('default', copyFunction);

function copyFunction() {
    return gulp
        .src([' ./files/.*', './files/*.*'])
        .pipe(copy('output/test', { prefix: 1 }))
        .pipe(verify());
}

function verify() {
    var options = { objectMode: true };
    return through(options, write, end);

    function write(file, enc, cb) {
        console.log('file write ', file.path);
        cb(null, file);
    }

    function end(cb) {
        console.log('done is copy verify function');
        cb();
    }
}