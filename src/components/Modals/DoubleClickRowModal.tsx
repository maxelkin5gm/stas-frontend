import React, {useState} from 'react';
import {Button} from "antd";

import BaseModal from "./BaseModal";
import cl from "./SelectWorkerModal.module.scss";
import InputCustom from "../Input/InputCustom";

interface DoubleClickRowModalProps {
    modalState: {
        visible: boolean,
        row: any
    }

    onClose: () => void,

    stasIndex: number
}

const DoubleClickRowModal = ({modalState, onClose, stasIndex}: DoubleClickRowModalProps) => {
    const countStoInputState = useState("1")

    if (!modalState.visible) return null;

    function saveNoteHandler() {

    }

    return (
        <BaseModal onClose={onClose}>
            <div className={cl.selectWorkerModal}>

                <div>
                    <h2>Найдено более одного сотрудника с ФИО: </h2>

                    <select multiple>
                        <option value="bh">jkb</option>
                    </select>



                    <InputCustom type={"number"} valueState={countStoInputState}/>

                    <Button type="primary" size="middle" onClick={saveNoteHandler}>save</Button>
                </div>

                <div>
                    <textarea>
                        test
                    </textarea>
                    <Button type="primary" size="middle" onClick={saveNoteHandler}>save</Button>
                </div>

            </div>
        </BaseModal>
    );
};

export default DoubleClickRowModal;