import { SideNavState } from "app/areas/layout/side-nav/index";

export interface AppState {
	sideNav: SideNavState;
}

export const initialState = {
	sideNav: { items: [] }
};