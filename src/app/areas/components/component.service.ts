import { autoinject } from "aurelia-framework";

import { _ } from "app/common";
import { Component } from "./component.model";

@autoinject
export class ComponentService {

	private components: Component[] = [
		{ title: "Input", key: "input", },
		{ title: "Button", key: "button" }
	];

	getAll(): Component[] {
		return this.components;
	}

	getByKey(key: string): Component | undefined {
		return _.find(this.components, { key: key });
	}

	count(): number {
		return this.components.length;
	}

}