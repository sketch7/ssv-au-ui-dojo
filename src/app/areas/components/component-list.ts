import { autoinject } from "aurelia-framework";

import { ILog, LoggerFactory, consts } from "app/common";

import { ComponentService } from "./component.service";
import { Component } from "./component.model";

@autoinject
export class ComponentListController {

	componentDetailRoute = consts.routeStates.components.detail;

	components: Component[];
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private service: ComponentService
	) {
		this.logger = loggerFactory.get("component-list");
	}

	activate() {
		this.components = this.service.getAll();
	}

}