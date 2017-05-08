import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";
import { supportedChipTypes, supportedFillStyles } from "@ssv/au-ui";

@autoinject
export class ChipsSampleController {

	isDisabled = false;
	types: string[] = supportedChipTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];

	fruits = ["banana", "strawberry", "melon"];
	fillStyle = supportedFillStyles;
	focusStyle = supportedFillStyles;

	options: any[] = [
		{ text: "Barbarian", value: "barbarian", iconImage: "/dist/assets/imgs/barb_150x190.jpg" },
		{ text: "Monk", value: "monk", iconText: "MNKI" },
		{ text: "Crusader", value: "crusader", iconName: "shield", allowRemove: false },
		{ text: "Demon Hunter", value: "demon-hunter", allowRemove: false },
		{ text: "Wizard", value: "wizard", allowRemove: true }
		// { text: "Demon Hunter", value: "demon-hunter", allowRemove: false, iconImage: "/dist/assets/imgs/yuna.jpg" }
	];

	availableOptions: any[] = [
		{ text: "Barbarian", value: "barbarian" },
		{ text: "Crusader", value: "crusader" },
		{ text: "Demon Hunter", value: "demon-hunter" },
		{ text: "Monk", value: "monk" },
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
			event
		});
	}

	toggleDisable() {
		this.isDisabled = !this.isDisabled;
	}

}