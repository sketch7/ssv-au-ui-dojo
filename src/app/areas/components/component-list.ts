import { autoinject } from "aurelia-framework";

import { RouteMapper } from "@ssv/au-core";
import { ILog, LoggerFactory, routes } from "app/common";

import { ComponentService } from "./component.service";
import { Component } from "./component.model";

@autoinject
export class ComponentListController {

	componentDetailRoute = routes.components.detail;

	components: Component[];
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private service: ComponentService,
		private routeMapper: RouteMapper
	) {
		this.logger = loggerFactory.get("componentListController");
		const path = this.routeMapper.generate("/components/detail", { component: "input" });
		this.logger.warn("ctor", "path generated!", path);
	}

	activate() {
		this.components = this.service.getAll();
	}

}