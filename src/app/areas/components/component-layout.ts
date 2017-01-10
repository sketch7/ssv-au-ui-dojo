import { autoinject } from "aurelia-framework";
import { RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

import consts from "app/app.const";
import { ComponentService } from "./component.service";

@autoinject
export class ComponentsLayoutController {

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private componentService: ComponentService
	) {
		this.logger = loggerFactory.get("ComponentLayout");
	}

	configureRouter(config: RouterConfiguration) {
		this.logger.debug("configureRouter");

		config.map([
			{
				route: "",
				title: "Components",
				name: consts.routeStates.components.main,
				moduleId: `${consts.areasBasePath}/components/component-list`,
				nav: false,
				settings: { componentsCount: this.componentService.count() }
			},
			{
				route: ":component",
				title: "Components Detail",
				name: consts.routeStates.components.detail,
				moduleId: `${consts.areasBasePath}/components/component-detail`,
				nav: false,
				settings: {}
			},
		]);
	}

}