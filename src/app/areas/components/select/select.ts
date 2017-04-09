import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";
import { supportedSelectTypes } from "@ssv/au-ui";

@autoinject
export class SelectSampleController {

	types: string[] = supportedSelectTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];
	isDisabled = false;

	// options: any[];
	options: any[] = [
		{ text: "League of Legends", value: "lol", type: "MOBA" },
		{ text: "World Of Warcraft", value: "wow", type: "MMO" },
		{ text: "Heroes of the Storm", value: "hots", type: "MOBA" }
	];
	optionSelected = { text: "World Of Warcraft", value: "wow", type: "MMO" };
	optionsSelected: any[] = [
		{ text: "World Of Warcraft", value: "wow", type: "MMO" }
	];

	fruits: string[] = ["banana", "strawberry", "melon"];
	selectedFruit = "patato";
	selectedFruits = ["patato"];

	heroes: any[] = [
		{ id: 1, name: "thor", strength: 20 },
		{ id: 2, name: "iron man", strength: 11 },
		{ id: 3, name: "batman", strength: 7 }
	];
	heroSelected = { id: 2, name: "iron man", strength: 11 };
	heroesSelected: any[] = [
		{ id: 3, name: "batman", strength: 7 }
	];

	private counter = 0;
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("selectSampleController");
	}

	onChange(event: CustomEvent) {
		this.logger.debug("onChange", "triggered >>>", {
			previous: event.detail.previous,
			value: event.detail.value,
			event: event
		});
	}

	addGame() {
		this.counter++;
		this.logger.debug("addGame", "adding game", `WildStar-${this.counter}`);
		this.options = [...this.options, { text: `WildStar-${this.counter}`, value: `wild-star-${this.counter}`, type: "MMO" }];
	}

	toggleDisable() {
		this.isDisabled = !this.isDisabled;
	}

}