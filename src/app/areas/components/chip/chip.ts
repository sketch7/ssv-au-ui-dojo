import { autoinject } from "aurelia-framework";
import { supportedChipTypes } from "@ssv/au-ui";

@autoinject
export class ChipSampleController {

	types: string[] = supportedChipTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];

}