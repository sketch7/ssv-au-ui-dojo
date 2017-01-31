import { autoinject } from "aurelia-framework";

@autoinject
export class CheckboxSampleController {

	isTicked = false;
	colors = [null, "primary", "accent", "danger", "warn", "success"];

}