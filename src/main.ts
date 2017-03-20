import { Aurelia } from "aurelia-framework";
import { UiBootstrapper } from "@ssv/au-ui";

import { Bootstrapper } from "./app/app.bootstrap";

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature("app", {})
		.plugin("aurelia-animator-css")
		.plugin("@ssv/au-core")
		.plugin("@ssv/au-ui")
		;

	aurelia.start().then(() => {
		const bootstrapper: Bootstrapper = aurelia.container.get(Bootstrapper);
		bootstrapper.bootstrap();

		const uiBootstrapper = aurelia.container.get(UiBootstrapper) as UiBootstrapper;
		uiBootstrapper.init();

		aurelia.setRoot(bootstrapper.startupRoot);
	});
}