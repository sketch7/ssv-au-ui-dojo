import { autoinject } from "aurelia-framework";
import { supportedBadgeTypes } from "@ssv/au-ui";

@autoinject
export class BadgeSampleController {

	types: string[] = supportedBadgeTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];

}