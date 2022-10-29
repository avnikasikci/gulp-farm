
// var gulp = require('../../node_modules/gulp');


/*Part -3 */

const {parallel} = require('../../node_modules/gulp');

function clean(cb){
    console.log("clean function");    
    cb();
}
function build(cb){
    console.log("build function");    
    cb();
}
exports.build=build;
exports.default=parallel(clean,build);

/*Part -4 */


const {series} = require('../../node_modules/gulp');

function clean(cb){
    console.log("clean function");    
    cb();
}
function build(cb){
    console.log("build function");    
    cb();
}
// exports.build=build;
exports.default=series(clean,build);