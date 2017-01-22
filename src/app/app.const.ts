export class AppConst {

	basePath = "/dist/app";
	areasBasePath = `${this.basePath}/areas`;

	startupRoot = `app/areas/layout/layout`;

	name = "Sketch 7 UI Dojo";
	version = "1.0.0-alpha";

}

export class RoutesConfig {

	error = "error";
	home = "home";

	componentsRoot = "components";
	components = {
		list: `${this.componentsRoot}.list`,
		detail: `${this.componentsRoot}.detail`,
	};

}

export const routes = new RoutesConfig();

export default new AppConst();