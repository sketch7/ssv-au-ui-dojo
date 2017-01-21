import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory, RouteMapper } from "@ssv/au-core";

import { shellRoutes } from "app/app.router";
import { consts } from "app/common";

@autoinject
export class LayoutController {

	router: Router;
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private routeMapper: RouteMapper
	) {
		this.logger = loggerFactory.get("layoutController");
		this.logger.debug("ctor", "init");
	}

	configureRouter(config: RouterConfiguration, router: Router) {
		this.logger.debug("configureRouter");
		config.options.pushState = true;
		config.map(shellRoutes);
		config.mapUnknownRoutes(`${consts.areasBasePath}/error/not-found`);
		this.routeMapper.map(shellRoutes);
		this.router = router;
	}
}