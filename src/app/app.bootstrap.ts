import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory } from "@ssv/au-core";

import consts from "./app.const";

@autoinject
export class Bootstrapper {

	startupRoot = consts.startupRoot;
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("bootstrapper");
		this.logger.debug("ctor");
	}

	bootstrap(): void {
	}


}