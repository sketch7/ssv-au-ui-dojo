import { RouterConfiguration } from "aurelia-router";
import { consts, routes } from "app/common";

export class AppRouter {

	configure(config: RouterConfiguration) {
		config.options.pushState = true;
		config.map([
			{
				route: ["", "home"],
				title: "Home",
				name: routes.home,
				moduleId: `${consts.areasBasePath}/home/home`,
				nav: false,
				settings: {}
			}, {
				route: "components",
				title: "Components",
				name: routes.componentLayout,
				moduleId: `${consts.areasBasePath}/components/component-layout`,
				nav: true,
				settings: {}
			}
		]);
		config.mapUnknownRoutes(`${consts.areasBasePath}/error/not-found`);
	}
}