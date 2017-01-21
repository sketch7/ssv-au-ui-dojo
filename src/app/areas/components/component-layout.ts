import { autoinject } from "aurelia-framework";
import { RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

// import { consts, routes } from "app/common";
// import { ComponentService } from "./component.service";
import { componentRoutes } from "./component.routes";

@autoinject
export class ComponentsLayoutController {

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		// private componentService: ComponentService
	) {
		this.logger = loggerFactory.get("componentsLayoutController");
	}

	configureRouter(config: RouterConfiguration) {
		this.logger.debug("configureRouter");
		config.map(componentRoutes);
	}

}