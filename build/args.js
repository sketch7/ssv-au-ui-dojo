const yargs = require("yargs");

const argv = yargs
	.default("fix", false)

	.argv;

module.exports = {
	fix: argv.fix,
};