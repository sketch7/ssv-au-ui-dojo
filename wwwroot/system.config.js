/*
* This config is only used during development and build phase only
* It will not be available on production
*
*/

(function (global) {
	// wildcard paths
	var paths = {
		"*": "dist/*",
		"npm:*": "node_modules/*",
		"app/*": "dist/app/*"
	};

	// map tells the System loader where to look for things
	var map = {
		"app": "app",
		"main": "main.js",
		"rxjs": "npm:rxjs",
		"@ssv": "npm:@ssv",
		"lodash": "npm:lodash",
		"bluebird": "npm:bluebird",
		"fuse": "npm:fuse.js/src",
	};

	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		"app": { defaultExtension: "js" },
		"rxjs": { defaultExtension: "js" },
		"fuse": { main: "fuse.js" },
		"lodash": { main: "index.js" },
		"bluebird": { main: "js/release/bluebird.js" },
	};

	// ssv
	const ssvPackages = {
		bundled: [
			"core",
			// "au-core",
		],
		singles: [
			"au-ui",
			"au-core",
		]
	};

	ssvPackages.bundled.forEach(pkgName => {
		const name = `@ssv/${pkgName}`;
		map[name] = `npm:${name}/dist/umd`;
		packages[name] = { main: `../bundles/ssv-${pkgName}.umd.js`, defaultExtension: "js" };
	});
	ssvPackages.singles.forEach(pkgName => {
		const name = `@ssv/${pkgName}`;
		map[name] = `npm:${name}/dist/umd`;
		packages[name] = { main: `index.js`, defaultExtension: "js" };
		// packages[name] = { main: `../bundles/ssv-${pkgName}.umd.js`, defaultExtension: "js" };
	});

	// aurelia
	const auPackages = {
		bundled: [
			"animator-css",
			"binding",
			"bootstrapper",
			"dependency-injection",
			"event-aggregator",
			"framework",
			"history",
			"history-browser",
			"loader",
			"loader-default",
			"logging",
			"logging-console",
			"metadata",
			"pal",
			"pal-browser",
			"path",
			"polyfills",
			"route-recognizer",
			"router",
			"task-queue",
			"templating",
			"templating-binding",
		],
		singles: [
			"templating-resources",
			"templating-router",
			"ux",
		]
	};
	auPackages.bundled.forEach(pkgName => {
		const name = `aurelia-${pkgName}`;
		map[name] = `npm:${name}/dist/amd/${name}.js`;
	});
	auPackages.singles.forEach(pkgName => {
		const name = `aurelia-${pkgName}`;
		map[name] = `npm:${name}/dist/amd`;
		packages[name] = { main: "index.js", defaultExtension: "js" };
	});

	var config = {
		map: map,
		packages: packages,
		paths: paths
	};

	System.config(config);

})(this);
