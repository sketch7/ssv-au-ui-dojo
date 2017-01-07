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
				settings: { level: 1, icon: "fa fa-cubes", details: `${this.componentService.count()} available` }
			}, {
				route: "input",
				title: "Input",
				name: consts.routeStates.components.input,
				moduleId: `${consts.areasBasePath}/components/input/input`,
				nav: false,
				settings: {}
			}, {
				route: "button",
				title: "Button",
				name: consts.routeStates.components.button,
				moduleId: `${consts.areasBasePath}/components/button/button`,
				nav: false,
				settings: {}
			}
		]);
	}

}