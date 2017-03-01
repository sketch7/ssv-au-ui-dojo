import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";
import { supportedSelectTypes } from "@ssv/au-ui";

@autoinject
export class SelectSampleController {

	types: string[] = supportedSelectTypes;
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];
	options: any[] = [
		{ text: "League of Legends", value: "lol" },
		{ text: "World Of Warcraft", value: "wow" },
		{ text: "Heroes of the Storm", value: "hots" }
	];
	optionSelected = null;
	optionsSelected: any[] = [
		{ text: "World Of Warcraft", value: "wow" }
	];

	heroes: any[] = [
		{ id: 1, name: "thor", strength: 20 },
		{ id: 2, name: "iron man", strength: 11 },
		{ id: 3, name: "batman", strength: 7 }
	];

	heroSelected = { id: 2, name: "iron man", strength: 11 };
	heroesSelected: any[] = [
		{ id: 3, name: "batman", strength: 7 }
	];

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

}