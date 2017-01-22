import { autoinject } from "aurelia-framework";
import { RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

import { componentRoutes } from "./component.route";

@autoinject
export class ComponentsLayoutController {

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("componentsLayoutController");
	}

	configureRouter(config: RouterConfiguration) {
		config.map(componentRoutes);
	}

}