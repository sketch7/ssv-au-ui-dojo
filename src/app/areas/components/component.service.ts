import { autoinject } from "aurelia-framework";
import { RouteLink } from "@ssv/au-core";

import { _, routes } from "app/common";
import { Component } from "./component.model";

@autoinject
export class ComponentService {

	private components: Component[] = [
		{ title: "Input", key: "input", },
		{ title: "Button", key: "button" }
	];

	private routes: RouteLink[] = [];

	getAll(): Component[] {
		return this.components;
	}

	getByKey(key: string): Component | undefined {
		return _.find(this.components, { key: key });
	}

	count(): number {
		return this.components.length;
	}

	getRoutes(): RouteLink[] {
		if (this.routes.length > 0) {
			return this.routes;
		}

		for (let component of this.components) {
			this.routes.push({
				label: component.title,
				routeName: routes.components.detail,
				params: { component: component.key }
			});
		}

		return this.routes;
	};

}