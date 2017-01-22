import { autoinject, customElement, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import { ILog, LoggerFactory } from "@ssv/au-core";

@autoinject
@customElement("app-sidenavbar")
export class SideNavBarController {

	@bindable router: Router;

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("sideNavBarController");
	}
}