import { autoinject, customElement } from "aurelia-framework";
import { ILog, LoggerFactory, Store, Subscription } from "@ssv/au-core";

import { AppState } from "app/app.state";
import { SideNavState } from "./side-nav.model";

@autoinject
@customElement("app-sidenav")
export class SideNavController {

	sideNav: SideNavState;

	private logger: ILog;
	private subscription$$: Subscription;

	constructor(
		private store: Store<AppState>,
		loggerFactory: LoggerFactory
	) {
		this.logger = loggerFactory.get("SideNavController");
	}

	attached() {
		this.subscription$$ = this.store.subscribe<SideNavState>("sideNav", x => this.sideNav = x);
	}

	unattached() {
		this.subscription$$.dispose();
	}
}