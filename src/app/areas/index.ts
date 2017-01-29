import { FrameworkConfiguration } from "aurelia-framework";

export function configure(aurelia: FrameworkConfiguration) {
	aurelia.globalResources("./layout/navbar/navbar");
	aurelia.globalResources("./layout/side-nav/side-nav");
	aurelia.globalResources("./shared/components/prism/prism.attribute");
}