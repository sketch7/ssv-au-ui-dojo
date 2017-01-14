import { autoinject, customElement, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

import consts from "app/app.const";

@autoinject
@customElement("ssv-sidenavbar")
export class SideNavBarController {

	@bindable router: Router;

	get appTitle() {
		return consts.name;
	}

	get appVersion() {
		return consts.version;
	}

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("sideNavBarController");
		this.logger.debug("ctor", "init");
	}
}