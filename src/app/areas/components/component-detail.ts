import { autoinject } from "aurelia-framework";

import { ILog, LoggerFactory, consts } from "app/common";

import { ComponentService } from "./component.service";
import { Component } from "./component.model";

@autoinject
export class ComponentDetailController {

	componentsBasePath = `${consts.areasBasePath}/components`;

	key: string;
	component: Component | undefined;
	componentsRoute = consts.routeStates.components.main;

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private service: ComponentService
	) {
		this.logger = loggerFactory.get("component-list");
	}

	activate(params: { component: string }) {
		this.key = params.component;
		this.component = this.service.getByKey(params.component);
	}
}