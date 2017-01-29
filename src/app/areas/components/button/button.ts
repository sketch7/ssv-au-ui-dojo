import { autoinject } from "aurelia-framework";
import { buttonType } from "@ssv/au-ui";

import { _ } from "app/common";

@autoinject
export class ButtonSampleController {

	buttonTypes: string[];
	colors = [null, "primary", "accent", "danger", "warn", "success"];

	activate() {
		this.buttonTypes = _.values<string>(buttonType);
	}

}