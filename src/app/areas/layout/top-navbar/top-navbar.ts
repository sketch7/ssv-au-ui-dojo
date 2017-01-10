import { autoinject, customElement, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

import { consts } from "app/common";

@autoinject
@customElement("ssv-topnavbar")
export class TopNavBarController {

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
		this.logger = loggerFactory.get("topNavBarController");
		this.logger.debug("ctor", "init");
	}
}