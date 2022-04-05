import {TableAction, TableState, TableStateAction, TableTypeEnum} from "./tableReducer.type";

const tableInit: TableState = {
    type: TableTypeEnum.INIT,
    query: undefined
}

const initialStore: TableState[] = [{...tableInit}, {...tableInit}, {...tableInit}]

export const tableReducer = (state: TableState[] = initialStore, action: TableAction): TableState[] => {
    const newState = [...state];

    switch (action.type) {

        case TableStateAction.REFRESH_TABLE:
            return newState;

        case TableStateAction.SET_WORKER_TABLE:
            newState[action.stasIndex] = {
                type: TableTypeEnum.WORKER,
                query: undefined
            }
            return newState;

        default:
            return state;
    }
}