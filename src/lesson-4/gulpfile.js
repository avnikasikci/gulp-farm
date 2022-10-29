/*part -5 */


// var gulp = require('gulp');
// var copy = require('gulp-copy');
// var through = require('through2');

var copy = require('../../node_modules/gulp-copy');
var gulp = require('../../node_modules/gulp');
var through = require('../../node_modules/through2');


gulp.task('defaultTask', copyFunction);

function copyFunction() {

    return gulp.src(['./files.*', './files/*.*']) // files klasoründeki tüm sub dosyaları ve bahsi geçen tüm dosyaları source olarak veriyoruz
        .pipe(copy('output/test', { prefix: 1 }))//hedef klasorumuz output/test olarak belirledik
        .pipe(verify()); //dosya yazma işlemlerinde bir sorun oluşmus mu ?
}

function verify() {
    var options = { objectMode: true };
    return through(options, write, end);

    function write(file, enc, cb) {
        console.log('file write', file.path);
        cb(null,file);
    }
    function end(cb) {
        console.log("end to copy");
        cb();
    }
}