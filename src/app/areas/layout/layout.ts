import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory, RouteMapper } from "@ssv/au-core";

import { consts } from "app/common";
import { shellRoutes } from "./layout.route";

@autoinject
export class LayoutController {

	router: Router;
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private routeMapper: RouteMapper
	) {
		this.logger = loggerFactory.get("layoutController");
	}

	configureRouter(config: RouterConfiguration, router: Router) {
		config.options.pushState = true;
		config.map(shellRoutes);
		config.mapUnknownRoutes(`${consts.areasBasePath}/error/not-found`);
		this.routeMapper.map(shellRoutes);
		this.router = router;
	}

}