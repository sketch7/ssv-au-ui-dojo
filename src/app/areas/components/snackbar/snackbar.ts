import * as _ from "lodash";
import { autoinject } from "aurelia-framework";
import { LoggerFactory, ILog } from "@ssv/au-core";
import { SnackbarService, SnackbarRef } from "@ssv/au-ui";

@autoinject
export class SnackbarSampleController {

	items: SnackbarRef[] = [];
	activeItem: SnackbarRef | null;

	private counter = 0;
	private logger: ILog;

	constructor(
		loggerFactory: LoggerFactory,
		private snackbarService: SnackbarService,
	) {
		this.logger = loggerFactory.get("snackbarSampleController");

		snackbarService.activeItem$.subscribe(x => {
			this.activeItem = x;
		});
	}

	showBasic() {
		const snackbarRef = this.snackbarService.open(`Message sent ${++this.counter}`);
		this.items.push(snackbarRef);
		snackbarRef.onDismiss(() => {
			this.logger.debug("showBasic", "dismissed");
			_.pull(this.items, snackbarRef);
		});
		snackbarRef.onAction(() => {
			this.logger.debug("showBasic", "action triggered!");
		});
	}

	showWithAction() {
		const snackbarRef = this.snackbarService.open("You have been disconnected", "Reconnect", {
			duration: 5000
		});
		this.items.push(snackbarRef);
		snackbarRef.onDismiss(() => {
			this.logger.debug("showWithAction", "dismissed");
			_.pull(this.items, snackbarRef);
		});
		snackbarRef.onAction(() => {
			this.logger.debug("showWithAction", "action triggered!");
		});
	}

	dismissCurrent() {
		this.snackbarService.dismiss();
	}

	dismissAll() {
		this.snackbarService.dismissAll();
	}

}