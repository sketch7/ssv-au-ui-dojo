import { autoinject } from "aurelia-framework";

import { ILog, LoggerFactory, routes, consts } from "app/common";

import { ComponentService } from "./component.service";
import { Component } from "./component.model";

@autoinject
export class ComponentDetailController {

	componentsBasePath = `${consts.areasBasePath}/components`;

	key: string;
	component: Component | undefined;
	componentsRoute = routes.components.list;

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private service: ComponentService
	) {
		this.logger = loggerFactory.get("componentDetailController");
	}

	activate(params: { component: string }) {
		this.key = params.component;
		this.component = this.service.getByKey(params.component);
	}
}