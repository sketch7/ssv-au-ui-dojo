import { RouteConfig } from "aurelia-router";

import { consts, routes, setRouteDefaults } from "app/common";
import { componentRoutes } from "../components/index";

export const shellRoutes: RouteConfig[] = [
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
		name: routes.componentsRoot,
		moduleId: `${consts.areasBasePath}/components/component-layout`,
		nav: true,
		settings: { childRoutes: componentRoutes }
	}
].map(x => setRouteDefaults(x));
