import { autoinject } from "aurelia-framework";
import { IComponent } from "../component.model";

@autoinject
export class ButtonSampleController {

	component: IComponent;

	activate(modelData: { component: IComponent; }) {
		this.component = modelData.component;
	}
}