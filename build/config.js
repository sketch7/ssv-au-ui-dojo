var path = require("path");
var fs = require("fs");

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const srcRoot = "src";
const outRoot = "wwwroot";
const typings = "typings/index.d.ts";

module.exports = {
	output: {
		root: outRoot,
		dist: `${outRoot}/dist`
	},
	src: {
		root: srcRoot,
		typings: [typings, `./${outRoot}/jspm_packages/**/*.d.ts`],
		ts: `./${srcRoot}/**/*.ts`,
		html: `./${srcRoot}/app/**/*.html`,
		sass: [
			`./${srcRoot}/app/**/*.scss`,
			`./${srcRoot}/assets/styles/**/*.scss`,
			`./node_modules/@ssv/au-ui/dist/sass/**/*.scss`,
		],
		imgs: `./${srcRoot}/assets/**/*.{png,jpeg,jpg}`,
		indexHtml: `./${srcRoot}/index.html`
	},
	sass: {
		includePaths: [
			"./src/assets/styles",
			"./node_modules/@ssv/au-ui/dist/sass",
			"./node_modules/normalize-scss/sass",
			"./node_modules/node-waves/src/scss",
		]
	},
	doc: "./doc",
	packageName: pkg.name
};