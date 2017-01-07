import { autoinject } from "aurelia-framework";

import { ILog, LoggerFactory, consts } from "app/common";

import { ComponentService } from "./component.service";
import { IComponent } from "./component.model";

@autoinject
export class ComponentListController {

	componentsBasePath = `${consts.areasBasePath}/components`;

	components: IComponent[];
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private service: ComponentService
	) {
		this.logger = loggerFactory.get("component-list");
	}

	activate() {
		this.components = this.service.getAll();
	}

	getByKey(key: string) {
		const item = this.service.getByKey(key);

		if (!item) {
			this.logger.error(`getByKey`, `key not found`, key);
		}

		return item;
	}
}