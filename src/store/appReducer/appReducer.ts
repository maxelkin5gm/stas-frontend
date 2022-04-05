import {AppAction, AppStateAction, AppState} from "./appReducer.type";

const initialStore: AppState = {
    tabIndex: 0,
}

export const appReducer = (state: AppState = initialStore, action: AppAction): AppState => {
    switch (action.type) {

        case AppStateAction.CHANGE_TAB:
            return {
                ...state,
                tabIndex: action.tabIndex
            };

        default:
            return state;
    }
}