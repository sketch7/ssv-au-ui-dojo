import { autoinject } from "aurelia-framework";

@autoinject
export class CheckboxSampleController {

	isTicked = false;
	isDisabled = false;
	indeterminateChecked = null;

	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];
	types = ["minimal", "filled"];

	resetIndeterminate() {
		this.indeterminateChecked = null;
	}

}