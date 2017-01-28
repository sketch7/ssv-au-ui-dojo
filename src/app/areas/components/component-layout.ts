import { autoinject } from "aurelia-framework";
import { RouterConfiguration } from "aurelia-router";
import { ILog, LoggerFactory, Store } from "@ssv/au-core";

import { AppState } from "app/app.state";
import { componentRoutes } from "./component.route";
import { ComponentService } from "./component.service";

@autoinject
export class ComponentsLayoutController {

	private logger: ILog;

	constructor(
		private store: Store<AppState>,
		private service: ComponentService,
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("componentsLayoutController");
	}

	activate() {
		this.store.set("sideNav", {
			items: this.service.getRoutes()
		});
	}

	configureRouter(config: RouterConfiguration) {
		config.map(componentRoutes);
	}

}