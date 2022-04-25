import {useTypeDispatch} from "./useTypeDispatch";
import {AppStateActionTypes} from "../store/appReducer/appReducer.type";

export const useLoader = (callback: Function) => {
    const dispatch = useTypeDispatch();

    return () => {
        dispatch({type: AppStateActionTypes.SET_LOADING, isLoading: true})
        callback()
        dispatch({type: AppStateActionTypes.SET_LOADING, isLoading: false})
    }


}