export interface AppState {
    tabIndex: number,
}

/**
 * Actions types
 */
export enum AppStateAction {
    CHANGE_TAB = "CHANGE_TAB",
}
export interface ChangeTabAction {
    type: AppStateAction.CHANGE_TAB,
    tabIndex: number
}
export type AppAction = ChangeTabAction;