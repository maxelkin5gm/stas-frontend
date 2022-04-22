import React from 'react';
import style from "./ErrorModal.module.scss"
import {Button} from "antd";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {AppStateActionTypes} from "../../store/appReducer/appReducer.type";

const ErrorModal = () => {
    const errorModal = useTypeSelector(state => state.app.errorModal);
    const dispatch = useTypeDispatch();

    function closeHandler() {
        dispatch({
            type: AppStateActionTypes.SET_ERROR_MODAL,
            visible: false,
            text: ""
        })
    }

    if (!errorModal.visible) return null;

    return (
        <div className={style.errorModal}>
            <div className={style.errorModal__content}>
                <h1>Error</h1>
                <h3>{errorModal.text}</h3>
                <Button danger type="default" size="middle" onClick={closeHandler}>Закрыть</Button>
            </div>
        </div>

    );
};

export default ErrorModal;