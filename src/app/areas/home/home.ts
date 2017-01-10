import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";

import { consts } from "app/common";

@autoinject
export class HomeController {

	title = consts.name;

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("homeController");
	}

}