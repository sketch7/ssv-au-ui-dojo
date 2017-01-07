import { FrameworkConfiguration } from "aurelia-framework";

export function configure(aurelia: FrameworkConfiguration) {
	aurelia.globalResources("./nav/nav");
	aurelia.globalResources("./value-converters/uppercase");
}