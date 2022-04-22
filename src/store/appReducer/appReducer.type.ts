export interface AppState {
    tabIndex: number,
    isLoading: boolean
    errorModal: {
        visible: boolean,
        text: string
    }
}

export enum AppStateActionTypes {
    CHANGE_TAB = "CHANGE_TAB",
    SET_LOADING = "SET_LOADING",
    SET_ERROR_MODAL = "SET_ERROR_MODAL"
}
/**
 * Actions
 */
export interface ChangeTabAction {
    type: AppStateActionTypes.CHANGE_TAB,
    tabIndex: number
}
export interface SetLoadingAction {
    type: AppStateActionTypes.SET_LOADING,
    isLoading: boolean
}
export interface SetErrorModalAction {
    type: AppStateActionTypes.SET_ERROR_MODAL,
    visible: boolean,
    text: string
}
export type AppAction = ChangeTabAction | SetLoadingAction | SetErrorModalAction;