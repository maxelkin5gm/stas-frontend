import {Worker} from "./worker.types";
import {Cart} from "./cart.types";

export enum TableTypeEnum {
    INIT = "INIT",
    WORKER = "WORKER",
    DETAIL = "DETAIL",
    STO = "STO",
    CELL = "CELL",
    CART = "CART",
}

/**
 * Query table types
 */
interface InitTableQuery {
    type: TableTypeEnum.INIT
    query: undefined
}

interface WorkerTableQuery {
    type: TableTypeEnum.WORKER,
    query: Worker
}

interface DetailTableQuery {
    type: TableTypeEnum.DETAIL,
    query: {
        detail: string,
        operationNumber?: string
    }
}

interface StoTableQuery {
    type: TableTypeEnum.STO,
    query: {
        sto: string
    }
}

interface CellTableQuery {
    type: TableTypeEnum.CELL,
    query: {
        side: string,
        cellNumber: number
    }
}

interface CartTableQuery {
    type: TableTypeEnum.CART,
    query: Cart[]
}

export type TableQuery =
    InitTableQuery
    | WorkerTableQuery
    | DetailTableQuery
    | StoTableQuery
    | CellTableQuery
    | CartTableQuery;
