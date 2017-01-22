import { RouteConfig } from "aurelia-router";
import { consts, routes, setRouterDefaults } from "app/common";

export const componentRoutes: RouteConfig[] = [
	{
		route: "",
		title: "Components",
		name: routes.components.list,
		moduleId: `${consts.areasBasePath}/components/component-list`,
		nav: false,
		settings: {}
	},
	{
		route: "/:component",
		title: "Components Detail",
		name: routes.components.detail,
		moduleId: `${consts.areasBasePath}/components/component-detail`,
		nav: false,
		settings: {}
	},
].map(x => setRouterDefaults(x));
