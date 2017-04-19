import { autoinject } from "aurelia-framework";
import { LoggerFactory, ILog } from "@ssv/au-core";

@autoinject
export class InputSampleController {

	isDisabled = true;
	firstName = "Chiko";
	modifier = "success";
	colors = [null, "primary", "accent", "danger", "warn", "success", "info"];

	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
	) {
		this.logger = loggerFactory.get("inputSampleController");
	}

	toggleDisable() {
		this.isDisabled = !this.isDisabled;
	}

	submit() {
		this.logger.info("submit", "", { firstName: this.firstName });
	}

}