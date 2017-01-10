import { autoinject } from "aurelia-framework";
import { RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

import { consts, routes } from "app/common";
import { ComponentService } from "./component.service";

@autoinject
export class ComponentsLayoutController {

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private componentService: ComponentService
	) {
		this.logger = loggerFactory.get("componentsLayoutController");
	}

	configureRouter(config: RouterConfiguration) {
		this.logger.debug("configureRouter");

		config.map([
			{
				route: "",
				title: "Components",
				name: routes.components.main,
				moduleId: `${consts.areasBasePath}/components/component-list`,
				nav: false,
				settings: { componentsCount: this.componentService.count() }
			},
			{
				route: ":component",
				title: "Components Detail",
				name: routes.components.detail,
				moduleId: `${consts.areasBasePath}/components/component-detail`,
				nav: false,
				settings: {}
			},
		]);
	}

}