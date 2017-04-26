var gulp = require("gulp");
var del = require("del");

var paths = require("../config");

gulp.task("clean", () => {
	return del(paths.output.dist);
});