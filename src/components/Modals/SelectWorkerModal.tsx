import React from 'react';
import {useTypeDispatch} from "../../hooks/useTypeDispatch";

import BaseModal from "./BaseModal";
import {StasStateActionTypes, Worker} from "../../store/stasReducer/stasReducer.type";
import cl from "./SelectWorkerModal.module.scss";

interface SelectWorkerModalProps {
    modalState: {
        visible: boolean,
        workers: Worker[]
    }

    onClose: () => void,

    stasIndex: number
}

const SelectWorkerModal = ({modalState, onClose, stasIndex}: SelectWorkerModalProps) => {
    const dispatch = useTypeDispatch();

    if (!modalState.visible) return null;

    const name = modalState.workers[0].name;

    function selectHandler(e: React.MouseEvent<HTMLOptionElement, MouseEvent>) {
        const personnelNumber = e.currentTarget.value;
        dispatch({
            type: StasStateActionTypes.SET_WORKER,
            stasIndex: stasIndex,
            worker: {
                name,
                personnelNumber
            }
        })
        onClose();
    }

    return (
        <BaseModal onClose={onClose}>
            <div className={cl.selectWorkerModal}>

                <h2>Найдено более одного сотрудника с ФИО: <span>{name}</span></h2>

                <select multiple>
                    {modalState.workers.map((item) =>
                        <option onDoubleClick={selectHandler} value={item.personnelNumber}
                                key={item.personnelNumber}>{item.personnelNumber}</option>
                    )}
                </select>

            </div>
        </BaseModal>
    );
};

export default SelectWorkerModal;