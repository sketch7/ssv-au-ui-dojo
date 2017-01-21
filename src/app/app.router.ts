import { RouteConfig } from "aurelia-router";
import { consts, routes } from "app/common";
import { componentRoutes } from "./areas/components/component.routes";

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
		// name: routes.componentLayout,
		name: "/components",
		moduleId: `${consts.areasBasePath}/components/component-layout`,
		nav: true,
		settings: {
			childRoutes: componentRoutes
		}
	}
];