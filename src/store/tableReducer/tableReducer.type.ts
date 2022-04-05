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

/**
 * Actions types
 */
export enum TableStateAction {
    SET_WORKER_TABLE = "SET_WORKER_TABLE",
    SET_DETAIL_TABLE = "SET_DETAIL_TABLE",
    SET_STO_TABLE = "SET_STO_TABLE",
    SET_CELL_TABLE = "SET_CELL_TABLE",
    REFRESH_TABLE = "REFRESH_TABLE",
}
export interface SetWorkerTableAction {
    type: TableStateAction.SET_WORKER_TABLE,
    stasIndex: number,
    table: {
        type: TableTypeEnum.WORKER,
    },
}
export interface SetDetailTableAction {
    type: TableStateAction.SET_DETAIL_TABLE,
    stasIndex: number,
    table: {
        type: TableTypeEnum.DETAIL,
        query: Detail
    },
}
export interface SetStoTableAction {
    type: TableStateAction.SET_STO_TABLE,
    stasIndex: number,
    table: {
        type: TableTypeEnum.STO,
        query: Sto
    },
}
export interface SetCellTableAction {
    type: TableStateAction.SET_CELL_TABLE,
    stasIndex: number,
    table: {
        type: TableTypeEnum.CELL,
        query: Cell
    },
}
export interface RefreshTableAction {
    type: TableStateAction.REFRESH_TABLE,
    stasIndex: number
}
export type TableAction = SetWorkerTableAction | SetDetailTableAction | SetStoTableAction | SetCellTableAction | RefreshTableAction;