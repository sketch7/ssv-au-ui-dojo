import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory, Store } from "@ssv/au-core";

import { consts } from "app/common";
import { AppState } from "app/app.state";

@autoinject
export class HomeController {

	title = consts.name;

	private logger: ILog;

	constructor(
		private store: Store<AppState>,
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("homeController");
	}

	activate() {
		this.store.set("sideNav", { items: [] });
	}

}