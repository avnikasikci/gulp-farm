var gulp = require('../../../node_modules/gulp');

// Keeps watching for amended files
var watch = require('../../../node_modules/gulp-watch');

var paths = {
    source: '../../dist',
    destination: '../../public'
};

gulp.task('default', ['watch-amended-folder']);


gulp.task('watch-amended-folder', function() {

    console.log("hello gulp has been integred into your projects");
    return "";
    // return gulp.src(paths.source + '/**/*', {base: paths.source})
    //     .pipe(watch(paths.source, {base: paths.source}))
    //     .pipe(gulp.dest(paths.destination));
});