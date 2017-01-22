import * as _ from "lodash";
import { RouteConfig } from "aurelia-router";

const defaultConfig = { settings: { useSpecificName: true } };
export function setRouterDefaults(route: RouteConfig, specific?: Object) {
	let defaults = _.defaultsDeep(specific, defaultConfig);
	route = _.defaultsDeep<Object, RouteConfig>(defaults, route);

	if (!route.title) {
		route.title = typeof route.route === "string"
			? _.startCase(route.route)
			: _.startCase(route.route[1]);
	}

	return route;
};