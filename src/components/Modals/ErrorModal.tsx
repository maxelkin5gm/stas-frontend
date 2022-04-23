import React from 'react';
import {Button} from "antd";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";
import {useTypeSelector} from "../../hooks/useTypeSelector";

import {AppStateActionTypes} from "../../store/appReducer/appReducer.type";
import BaseModal from "./BaseModal";

const ErrorModal = () => {
    const errorModal = useTypeSelector(state => state.app.errorModal);
    const dispatch = useTypeDispatch();

    function closeHandler() {
        dispatch({type: AppStateActionTypes.SET_ERROR_MODAL, visible: false, text: ""})
    }

    if (!errorModal.visible) return null;

    return (
        <BaseModal>
            <h1>Error</h1>
            <h3 style={{marginBottom: "20px"}}>{errorModal.text}</h3>
            <Button danger type="default" size="large" onClick={closeHandler}>Закрыть</Button>
        </BaseModal>
    );
};

export default ErrorModal;