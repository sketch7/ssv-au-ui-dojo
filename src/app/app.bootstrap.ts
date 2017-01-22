import { autoinject } from "aurelia-framework";
import { ILog, LoggerFactory, Store } from "@ssv/au-core";

import consts from "./app.const";
import { AppState, initialState } from "./app.state";

@autoinject
export class Bootstrapper {

	startupRoot = consts.startupRoot;
	private logger: ILog;

	constructor(
		private store: Store<AppState>,
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("bootstrapper");
		this.logger.debug("ctor");
	}

	bootstrap(): void {
		this.store.initialize(initialState);
	}

}