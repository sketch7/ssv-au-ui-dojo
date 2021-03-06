import { autoinject } from "aurelia-framework";

import { ILog, LoggerFactory, routes, consts } from "app/common";
import { ComponentService } from "./component.service";
import { Component } from "./component.model";

@autoinject
export class ComponentListController {

	componentsBasePath = `${consts.areasBasePath}/components`;
	componentDetailRoute = routes.components.detail;
	components: Component[];
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private service: ComponentService
	) {
		this.logger = loggerFactory.get("componentListController");
	}

	activate() {
		this.components = this.service.getAll();
	}

}