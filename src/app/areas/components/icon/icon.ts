import { autoinject } from "aurelia-framework";
import { supportedElementSizes } from "@ssv/au-ui";

@autoinject
export class IconSampleController {

	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];
	sizes: string[] = supportedElementSizes;

}