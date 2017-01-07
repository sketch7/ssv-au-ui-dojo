import { autoinject } from "aurelia-framework";

import { _ } from "app/common";
import { IComponent } from "./component.model";

@autoinject
export class ComponentService {

	components: IComponent[] = [
		{ title: "Input", key: "input" },
		{ title: "Button", key: "button" }
	];

	getAll(): IComponent[] {
		return this.components;
	}

	getByKey(key: string): IComponent | undefined {
		return _.find(this.components, { key: key });
	}

	count(): number {
		return this.components.length;
	}

}