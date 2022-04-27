import {StasAction, StasState, StasStateActionTypes} from "./stasReducer.type";
import {StasStateEnum} from "./types/state.types";
import {TableTypeEnum} from "./types/table.types";

const stasInit: StasState = {
    state: StasStateEnum.READY,
    worker: {
        name: "",
        personnelNumber: ""
    },
    table: {
        type: TableTypeEnum.CLEAR,
        query: undefined
    },
    selectedCell: {
        cellNumber: null,
        side: null,
    },
    cart: []
}
const initialStore: StasState[] = [{...stasInit}, {...stasInit}, {...stasInit}]


export const stasReducer = (state: StasState[] = initialStore, action: StasAction): StasState[] => {
    const newState = [...state];

    switch (action.type) {
        case StasStateActionTypes.SET_STATE:
            newState[action.stasIndex].state = action.state;
            return newState;

        case StasStateActionTypes.SET_WORKER:
            newState[action.stasIndex].worker = action.worker;
            return newState;

        case StasStateActionTypes.SET_TABLE:
            newState[action.stasIndex].table = action.table;
            return newState;

        case StasStateActionTypes.SET_SELECTED_CELL:
            newState[action.stasIndex].selectedCell = action.selectedCell;
            return newState;

        case StasStateActionTypes.SET_CART:
            newState[action.stasIndex].cart = action.cart;
            return newState;

        default:
            return state;
    }
}