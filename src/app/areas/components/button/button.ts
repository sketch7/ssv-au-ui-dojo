import { autoinject } from "aurelia-framework";
import { supportedButtonTypes } from "@ssv/au-ui";

@autoinject
export class ButtonSampleController {

	buttonTypes: string[];
	colors = [null, "primary", "accent", "danger", "warn", "success"];

	activate() {
		this.buttonTypes = supportedButtonTypes;
	}

}