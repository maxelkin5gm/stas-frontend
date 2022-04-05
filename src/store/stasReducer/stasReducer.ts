import {StasAction, StasStateAction, StasState, StasStateEnum} from "./stasReducer.type";

const stasInit: StasState = {
    state: StasStateEnum.READY,
    worker: {
        name: "",
        personnelNumber: ""
    },
}
const initialStore: StasState[] = [{...stasInit}, {...stasInit}, {...stasInit}]


export const stasReducer = (state: StasState[] = initialStore, action: StasAction): StasState[] => {
    const newState = [...state];

    switch (action.type) {

        case StasStateAction.CHANGE_WORKER:
            newState[action.stasIndex].worker = action.worker;
            return newState;

        case StasStateAction.RESET_WORKER:
            newState[action.stasIndex].worker = {name: '', personnelNumber: ''};
            return newState;

        default:
            return state;
    }
}