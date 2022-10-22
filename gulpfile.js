var gulp = require('gulp');

gulp.task('default',defaultTask);

function defaultTask(done){
    console.log("hello gulp has been integred into your projects");
    done();
}