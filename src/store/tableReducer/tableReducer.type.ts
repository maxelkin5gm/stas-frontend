export interface TableState {
    type: TableTypeEnum,
    query: Detail | Sto | Cell | undefined
}

interface Detail {
    detail: string,
    operationNumber?: string,
}
interface Sto {
    sto: string,
}
interface Cell {
    side: string,
    cellNumber: number
}

export enum TableTypeEnum {
    INIT = "INIT",
    WORKER = "WORKER",
    DETAIL = "DETAIL",
    STO = "STO",
    CELL = "CELL"
}


export enum TableStateActionTypes {
    SET_WORKER_TABLE = "SET_WORKER_TABLE",
    SET_DETAIL_TABLE = "SET_DETAIL_TABLE",
    SET_STO_TABLE = "SET_STO_TABLE",
    SET_CELL_TABLE = "SET_CELL_TABLE",
    REFRESH_TABLE = "REFRESH_TABLE",
}
/**
 * Actions
 */
export interface SetWorkerTableAction {
    type: TableStateActionTypes.SET_WORKER_TABLE,
    stasIndex: number,
    table: {
        type: TableTypeEnum.WORKER,
    },
}
export interface SetDetailTableAction {
    type: TableStateActionTypes.SET_DETAIL_TABLE,
    stasIndex: number,
    table: {
        type: TableTypeEnum.DETAIL,
        query: Detail
    },
}
export interface SetStoTableAction {
    type: TableStateActionTypes.SET_STO_TABLE,
    stasIndex: number,
    table: {
        type: TableTypeEnum.STO,
        query: Sto
    },
}
export interface SetCellTableAction {
    type: TableStateActionTypes.SET_CELL_TABLE,
    stasIndex: number,
    table: {
        type: TableTypeEnum.CELL,
        query: Cell
    },
}
export interface RefreshTableAction {
    type: TableStateActionTypes.REFRESH_TABLE,
    stasIndex: number
}
export type TableAction = SetWorkerTableAction | SetDetailTableAction | SetStoTableAction | SetCellTableAction | RefreshTableAction;