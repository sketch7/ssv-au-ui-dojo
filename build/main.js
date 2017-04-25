
var gulp = require("gulp");
var paths = require("./config");

require('require-dir')('./tasks');

gulp.task("default", () => {

	console.log(`======== ${paths.packageName} ========`);


});