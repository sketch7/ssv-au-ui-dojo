export class AppConst {

	basePath = "/dist/app";
	areasBasePath = `${this.basePath}/areas`;

	startupRoot = `app/areas/layout/layout`;

	name = "Sketch 7 UI Dojo";
	version = "1.0.0-alpha";

	routeStates = new RouteStateConfig();
}


export class RouteStateConfig {
	layout = "layout";

	error = "error";
	home = `${this.layout}.home`;

	componentLayout = `${this.layout}.component-layout`;
	components = {
		main: `${this.layout}.component-list`,
		detail: `${this.layout}.component-detail`,
	};
}

export default new AppConst();