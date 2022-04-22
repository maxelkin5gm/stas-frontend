// state => StasState[] - stas 1, stas 2..
export interface StasState {
    worker: Worker
    state: StasStateEnum,
}

export interface Worker {
    name: string,
    personnelNumber: string
}
export enum StasStateEnum {
    READY = "READY",
    GO = "GO",
    WAIT = "WAIT",
}


export enum StasStateActionTypes {
    CHANGE_WORKER = "CHANGE_WORKER",
    RESET_WORKER = "RESET_WORKER",
}
/**
 * Actions
 */
export interface ChangeWorkerAction {
    type: StasStateActionTypes.CHANGE_WORKER,
    stasIndex: number,
    worker: Worker
}
export interface ResetWorkerAction {
    type: StasStateActionTypes.RESET_WORKER,
    stasIndex: number
}
export type StasAction = ChangeWorkerAction | ResetWorkerAction;