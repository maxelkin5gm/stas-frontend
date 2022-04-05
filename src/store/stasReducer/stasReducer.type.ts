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

/**
 * Actions types
 */
export enum StasStateAction {
    CHANGE_WORKER = "CHANGE_WORKER",
    RESET_WORKER = "RESET_WORKER",
}
export interface ChangeWorkerAction {
    type: StasStateAction.CHANGE_WORKER,
    stasIndex: number,
    worker: Worker
}
export interface ResetWorkerAction {
    type: StasStateAction.RESET_WORKER,
    stasIndex: number
}
export type StasAction = ChangeWorkerAction | ResetWorkerAction;