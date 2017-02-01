import { autoinject } from "aurelia-framework";
import { supportedBadgeTypes } from "@ssv/au-ui";

@autoinject
export class BadgeSampleController {

	badgeTypes: string[];
	colors = [null, "primary", "accent", "danger", "warn", "success"];

	activate() {
		this.badgeTypes = supportedBadgeTypes;
	}

}