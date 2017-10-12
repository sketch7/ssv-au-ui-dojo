import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";
import { supportedChipTypes, supportedFillStyles } from "@ssv/au-ui";

@autoinject
export class ChipsSampleController {

	isDisabled = false;
	types: string[] = supportedChipTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];

	fruits = ["banana", "strawberry", "melon"];
	fillStyles = supportedFillStyles;
	focusStyles = supportedFillStyles;

	options: any[] = [
		{ text: "Barbarian", value: "barbarian", iconImage: "/dist/assets/imgs/barb_150x190.jpg" },
		{ text: "Monk", value: "monk", iconText: "MNKI" },
		{ text: "Crusader", value: "crusader", iconName: "shield", allowRemove: false },
		{ text: "Demon Hunter", value: "demon-hunter", allowRemove: false },
		{ text: "Wizard", value: "wizard", allowRemove: true }
	];

	heroes: any[] = [
		// { id: 1, name: "iron man", profileImage: "/dist/assets/imgs/yuna.jpg"  },
		{ id: 1, name: "iron man", profileImage: "/dist/assets/imgs/iron-man-48x48.png"  },
		{ id: 2, name: "thor", logo: "gavel" },
		{ id: 3, name: "wonder woman", alias: "WM", isDeletable: false },
		{ id: 4, name: "batman", isDeletable: false },
		{ id: 5, name: "super man", isDeletable: true }
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