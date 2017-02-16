import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";
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