import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";
import { supportedChipTypes } from "@ssv/au-ui";

@autoinject
export class ChipsSampleController {

	types: string[] = supportedChipTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];

	fruits = ["banana", "strawberry", "melon"];

	options: any[] = [
		// { text: "Barbarian", value: "barbarian", imgSrc: "/dist/assets/imgs/barb-charge_32x32.png" },
		{ text: "Barbarian", value: "barbarian", imgSrc: "/dist/assets/imgs/barb_150x190.jpg" },
		{ text: "Monk", value: "monk", imgText: "MNKI" },
		{ text: "Crusader", value: "crusader", allowRemove: true, imgIcon: "shield" },
		{ text: "Demon Hunter", value: "demon-hunter", allowRemove: false, imgSrc: "/dist/assets/imgs/yuna.jpg" }
	];

	availableOptions: any[] = [
		{ text: "Barbarian", value: "barbarian" },
		{ text: "Crusader", value: "crusader" },
		{ text: "Demon Hunter", value: "demon-hunter" },
		{ text: "Monk", value: "monk", type: "MOBA" },
		{ text: "Witch Doctor", value: "witch-doctor" },
		{ text: "Wizard", value: "wizard" },
	];

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("chipsSampleController");
	}

	onRemove(event: CustomEvent) {
		this.logger.debug("onRemove", "item has been removed >>>", {
			value: event.detail.value,
			event: event
		});
	}

}