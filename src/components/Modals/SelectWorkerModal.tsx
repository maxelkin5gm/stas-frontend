import React from 'react';
import {Button} from "antd";

import BaseModal from "./BaseModal";
import {Worker} from "../../store/stasReducer/stasReducer.type";
import cl from "./SelectWorkerModal.module.scss"

interface SelectWorkerModalProps {
    modal: {
        visible: boolean,
        workers: Worker[]
    }

    onClose: () => void
}

const SelectWorkerModal = ({modal, onClose}: SelectWorkerModalProps) => {

    function closeHandler() {

    }

    function selectHandler(e: React.MouseEvent<HTMLSelectElement, MouseEvent>) {
        const option = e.target as EventTarget & HTMLSelectElement;
        console.log(option.value);
    }

    if (!modal.visible) return null;

    return (
        <BaseModal>
            <div className={cl.selectWorkerModal}>

                <h2>Найдено больше одного работника с ФИО: <span>Елькин М.В.</span></h2>

                <select onDoubleClick={selectHandler} multiple>
                    <option value="228">228</option>
                    <option value="229">229</option>
                </select>

                <Button danger type="default" size="large" onClick={onClose}>Закрыть</Button>
            </div>
        </BaseModal>
    );
};

export default SelectWorkerModal;