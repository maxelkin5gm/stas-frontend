import React, {useState} from 'react';
import {Button} from "antd";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useTypeDispatch} from "../../../hooks/useTypeDispatch";

import {WorkerService} from "../../../API/WorkerService";
import {StasStateActionTypes} from "../../../store/stasReducer/stasReducer.type";
import InputCustom from "../../Input/InputCustom";
import {AppStateActionTypes} from "../../../store/appReducer/appReducer.type";
import SelectWorkerModal from "../../Modals/SelectWorkerModal";
import {useLoader} from "../../../hooks/useLoader";
import {Worker} from "../../../store/stasReducer/types/worker.types";
import {TableTypeEnum} from "../../../store/stasReducer/types/table.types";

interface WorkerPanelProps {
    stasIndex: number
}


// todo autocomplete and warning on void inputs
const WorkerPanel = ({stasIndex}: WorkerPanelProps) => {

    const [modalState, setModalState] = useState({visible: false, workers: [] as Worker[]});
    const numberInputState = useState("");
    const nameInputState = useState("");
    const worker = useTypeSelector(state => state.stasList[stasIndex].worker);
    const dispatch = useTypeDispatch();

    async function selectByNameHandler() {
        const workers: Worker[] | null = await WorkerService.findAllByName(nameInputState[0])

        if (!workers || workers.length === 0) {
            dispatch({
                type: AppStateActionTypes.SET_ERROR_MODAL,
                visible: true,
                title: "Ошибка",
                text: "Сотрудника с таким ФИО не найдено"
            })
            return;
        }

        if (workers.length === 1)
            dispatch({type: StasStateActionTypes.SET_WORKER, worker: workers[0], stasIndex})

        if (workers.length > 1)
            setModalState({visible: true, workers})
    }

    async function selectByNumberHandler() {
        const worker: Worker | null = await WorkerService.findByPersonnelNumber(numberInputState[0])

        if (!worker)
            dispatch({
                type: AppStateActionTypes.SET_ERROR_MODAL,
                visible: true,
                title: "Ошибка",
                text: "Сотрудника с таким ФИО не найдено"
            });
        else
            dispatch({type: StasStateActionTypes.SET_WORKER, worker, stasIndex});
    }

    function resetHandler() {
        dispatch({type: StasStateActionTypes.RESET_WORKER, stasIndex})
    }

    function tableHandler() {
        dispatch({
            type: StasStateActionTypes.SET_TABLE,
            stasIndex: stasIndex,
            table: {
                type: TableTypeEnum.WORKER,
                query: worker
            }
        })
    }

    return (
        <>
            <div>
                <InputCustom placeholder={"Табельный номер"} type={"number"} valueState={numberInputState}/>
            </div>

            <div>
                <Button type="primary" size="middle" onClick={useLoader(selectByNumberHandler)} key={stasIndex}>Выбрать</Button>
            </div>

            <div style={{gridRow: "span 2"}}>
                <Button style={{width: "100%"}} type="primary" size="middle" onClick={resetHandler}>Сбросить</Button>
            </div>

            <div>
                <InputCustom placeholder={"ФИО"} valueState={nameInputState}/>
            </div>

            <div>
                <Button type="primary" size="middle" onClick={useLoader(selectByNameHandler)}>Выбрать</Button>
            </div>

            <div style={{textAlign: "center"}}>
                <span style={{fontSize: 16, fontWeight: "bold"}}>
                    {worker.name
                        ? `${worker.name} (${worker.personnelNumber})`
                        : "Не выбрано"}
                </span>
            </div>

            <div style={{gridColumn: "span 2"}}>
                <Button style={{width: "100%"}} type="primary" size="middle" onClick={tableHandler}>Показать выданные
                    СТО</Button>
            </div>

            <SelectWorkerModal modalState={modalState}
                               onClose={() => setModalState({...modalState, visible: false})}
                               stasIndex={stasIndex}
            />
        </>
    );
};

export default WorkerPanel;