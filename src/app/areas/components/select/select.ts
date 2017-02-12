import { autoinject } from "aurelia-framework";
import { supportedSelectTypes, SelectItem } from "@ssv/au-ui";

@autoinject
export class SelectSampleController {

	types: string[] = supportedSelectTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];

	options: SelectItem[] = [
		{ text: "League of Legends", value: "lol" },
		{ text: "World Of Warcraft", value: "wow" },
		{ text: "Heroes of the Storm", value: "hots" }
	];

}