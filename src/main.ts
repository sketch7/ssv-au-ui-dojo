import { Aurelia } from "aurelia-framework";

import { Bootstrapper } from "./app/app.bootstrap";

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature("app/areas", {})
		.plugin("@ssv/au-ui")
		.plugin("aurelia-animator-css");
	;

	aurelia.start().then(() => {
		const bootstrapper: Bootstrapper = aurelia.container.get(Bootstrapper);
		bootstrapper.bootstrap();
		aurelia.setRoot(bootstrapper.startupRoot);
	});
}