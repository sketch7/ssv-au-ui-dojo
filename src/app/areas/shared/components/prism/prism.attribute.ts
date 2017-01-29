import "prismjs";
import { autoinject } from "aurelia-dependency-injection";
import { customAttribute } from "aurelia-templating";

@autoinject
@customAttribute("ssv-syntax")
export class RouteActiveAttribute {

	constructor(
		private element: Element
	) {
	}

	bind() {
		Prism.highlightElement(this.element, false);
	}

}