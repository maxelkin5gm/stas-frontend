import {Worker} from "./types/worker.types";
import {TableQuery} from "./types/table.types";
import {StasStateEnum} from "./types/state.types";

// state => StasState[] - stas 1, stas 2..
export interface StasState {
    state: StasStateEnum,
    worker: Worker,
    table: TableQuery
}


export enum StasStateActionTypes {
    SET_WORKER = "SET_WORKER",
    RESET_WORKER = "RESET_WORKER",
    SET_TABLE = "SET_TABLE"
}

/**
 * Actions
 */
export interface ChangeWorkerAction {
    type: StasStateActionTypes.SET_WORKER,
    stasIndex: number,
    worker: Worker
}
export interface ResetWorkerAction {
    type: StasStateActionTypes.RESET_WORKER,
    stasIndex: number
}
export interface SetTableAction {
    type: StasStateActionTypes.SET_TABLE,
    stasIndex: number,
    table: TableQuery
}

export type StasAction = ChangeWorkerAction | ResetWorkerAction | SetTableAction;