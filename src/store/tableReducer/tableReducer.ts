import {TableAction, TableState, TableStateActionTypes, TableTypeEnum} from "./tableReducer.type";

const tableInit: TableState = {
    type: TableTypeEnum.INIT,
    query: undefined
}

const initialStore: TableState[] = [{...tableInit}, {...tableInit}, {...tableInit}]

export const tableReducer = (state: TableState[] = initialStore, action: TableAction): TableState[] => {
    const newState = [...state];

    switch (action.type) {

        case TableStateActionTypes.REFRESH_TABLE:
            return newState;

        case TableStateActionTypes.SET_WORKER_TABLE:
            newState[action.stasIndex] = {
                type: TableTypeEnum.WORKER,
                query: undefined
            }
            return newState;

        default:
            return state;
    }
}