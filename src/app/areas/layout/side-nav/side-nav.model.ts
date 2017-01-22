import { RouteLink } from "@ssv/au-core";

export interface SideNavState {
	header?: RouteLink;
	items: RouteLink[];
}