import { autoinject } from "aurelia-framework";
import { supportedButtonTypes } from "@ssv/au-ui";

@autoinject
export class ButtonSampleController {

	types: string[] = supportedButtonTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success"];

}