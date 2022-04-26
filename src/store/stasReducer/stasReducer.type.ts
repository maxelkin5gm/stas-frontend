import {Worker} from "./types/worker.types";
import {TableQuery} from "./types/table.types";
import {StasStateEnum} from "./types/state.types";
import {SelectedCell} from "./types/selectedCell";
import {Cart} from "./types/cart.types";

// state => StasState[] - stas 1, stas 2..
export interface StasState {
    state: StasStateEnum,
    worker: Worker,
    table: TableQuery,
    selectedCell: SelectedCell,
    cart: Cart[]
}


export enum StasStateActionTypes {
    SET_STATE = "SET_STATE",
    SET_WORKER = "SET_WORKER",
    SET_TABLE = "SET_TABLE",
    SET_SELECTED_CELL = "SET_SELECTED_CELL",
    SET_CART = "SET_CART"
}

/**
 * Actions
 */
export interface SetStateAction {
    type: StasStateActionTypes.SET_STATE,
    stasIndex: number,
    state: StasStateEnum
}
export interface SetWorkerAction {
    type: StasStateActionTypes.SET_WORKER,
    stasIndex: number,
    worker: Worker
}
export interface SetTableAction {
    type: StasStateActionTypes.SET_TABLE,
    stasIndex: number,
    table: TableQuery
}
export interface SetSelectedCellAction {
    type: StasStateActionTypes.SET_SELECTED_CELL,
    stasIndex: number,
    selectedCell: SelectedCell
}
export interface SetCartAction {
    type: StasStateActionTypes.SET_CART,
    stasIndex: number,
    cart: Cart[]
}

export type StasAction = SetStateAction | SetWorkerAction | SetTableAction | SetSelectedCellAction | SetCartAction;