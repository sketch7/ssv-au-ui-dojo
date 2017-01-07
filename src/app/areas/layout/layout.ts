import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

import { AppRouter } from "app/app.router";

@autoinject
export class LayoutController {

	router: Router;
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private appRouter: AppRouter
	) {
		this.logger = loggerFactory.get("layoutController");
		this.logger.debug("ctor", "init");
	}

	configureRouter(config: RouterConfiguration, router: Router) {
		this.logger.debug("configureRouter");
		this.appRouter.configure(config);
		this.router = router;
	}
}