import { Aurelia } from "aurelia-framework";

import { Bootstrapper } from "./app/app.bootstrap";

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature("app/areas", {})
		.plugin("aurelia-animator-css")
		.plugin("aurelia-ux")
		.plugin("@ssv/au-ui")
	;

	aurelia.start().then(() => {
		const bootstrapper: Bootstrapper = aurelia.container.get(Bootstrapper);
		bootstrapper.bootstrap();
		aurelia.setRoot(bootstrapper.startupRoot);
	});
}