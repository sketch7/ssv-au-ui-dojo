import { autoinject } from "aurelia-framework";

@autoinject
export class InputSampleController {

	isDisabled = true;

	toggleDisable() {
		this.isDisabled = !this.isDisabled;
	}

}