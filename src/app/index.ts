import { FrameworkConfiguration } from "aurelia-framework";

export function configure(aurelia: FrameworkConfiguration): Promise<void> {
	aurelia.globalResources("./areas/layout/navbar/navbar");
	aurelia.globalResources("./areas/layout/side-nav/side-nav");
	aurelia.globalResources("./shared/components/prism/prism.attribute");

	return Promise.resolve();
}