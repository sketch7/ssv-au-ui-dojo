import { highlightElement } from "prismjs";
import { autoinject } from "aurelia-dependency-injection";
import { customAttribute } from "aurelia-templating";

@autoinject
@customAttribute("ssv-syntax")
export class SyntaxHighlighterAttribute {

	constructor(
		private element: Element
	) {
	}

	bind() {
		highlightElement(this.element, false);
	}

}