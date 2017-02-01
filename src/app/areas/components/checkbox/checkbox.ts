import { autoinject } from "aurelia-framework";

@autoinject
export class CheckboxSampleController {

	isTicked = false;
	isDisabled = false;
	colors = [null, "primary", "accent", "danger", "warn", "success"];

	types = ["default"];

}