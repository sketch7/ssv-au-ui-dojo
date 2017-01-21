import { RouteConfig } from "aurelia-router";
import { consts, routes } from "app/common";

export const componentRoutes: RouteConfig[] = [
	{
		route: "",
		title: "Components",
		name: routes.components.main,
		moduleId: `${consts.areasBasePath}/components/component-list`,
		nav: false,
		settings: { }
	},
	{
		route: "/:component",
		title: "Components Detail",
		// name: routes.components.detail,
		name: "detail",
		moduleId: `${consts.areasBasePath}/components/component-detail`,
		nav: false,
		settings: {}
	},
];