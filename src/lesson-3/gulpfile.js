//var gulp = require('../../../node_modules/gulp');
var gulp = require('../../node_modules/gulp');

gulp.task('default',defaultTask);

function defaultTask(done){
    console.log("hello gulp has been integred into your projects");
    done();
}