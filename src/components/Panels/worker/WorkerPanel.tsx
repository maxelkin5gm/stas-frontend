import React, {useState} from 'react';
import {Button} from "antd";

import {useTypeDispatch} from "../../../hooks/useTypeDispatch";
import {WorkerService} from "../../../API/WorkerService";
import {StasStateAction} from "../../../store/stasReducer/stasReducer.type";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import InputCustom from "../../UI/Input/InputCustom";
import {TableStateAction, TableTypeEnum} from "../../../store/tableReducer/tableReducer.type";

interface WorkerPanelProps {
    stasIndex: number
}

const WorkerPanel = ({stasIndex}: WorkerPanelProps) => {

    const numberInputState = useState("")
    const nameInputState = useState("")
    const worker = useTypeSelector(state => state.stasList[stasIndex].worker)
    const dispatch = useTypeDispatch()

    async function selectByNameHandler() {
        const name = nameInputState[0];
        const worker = await WorkerService.findByName(name)
        dispatch({
            type: StasStateAction.CHANGE_WORKER,
            worker,
            stasIndex
        })
    }

    async function selectByNumberHandler() {
        const personnelNumber = numberInputState[0];
        const worker = await WorkerService.findByPersonnelNumber(personnelNumber)
        dispatch({
            type: StasStateAction.CHANGE_WORKER,
            worker,
            stasIndex
        })
    }

    function resetHandler() {
        dispatch({
            type: StasStateAction.RESET_WORKER,
            stasIndex
        })
    }

    function tableHandler() {
        dispatch({
            type: TableStateAction.SET_WORKER_TABLE,
            stasIndex: stasIndex,
            table: {
                type: TableTypeEnum.WORKER
            }
        })
    }

    return (
        <>
            <div>
                <InputCustom placeholder={"Табельный номер"} type={"number"} valueState={numberInputState}/>
            </div>

            <div>
                <Button type="primary" size="middle" onClick={selectByNumberHandler} key={stasIndex}>Выбрать</Button>
            </div>

            <div style={{gridRow: "span 2"}}>
                <Button style={{width: "100%"}} type="primary" size="middle" onClick={resetHandler}>Сбросить</Button>
            </div>

            <div>
                <InputCustom placeholder={"ФИО"} valueState={nameInputState}/>
            </div>

            <div>
                <Button type="primary" size="middle" onClick={selectByNameHandler}>Выбрать</Button>
            </div>

            <div style={{textAlign: "center"}}>
                <span style={{fontSize: 16, fontWeight: "bold"}}>
                    {worker.name
                        ? `${worker.name} (${worker.personnelNumber})`
                        : "Не выбрано"}
                </span>
            </div>

            <div style={{gridColumn: "span 2"}}>
                <Button style={{width: "100%"}} type="primary" size="middle" onClick={tableHandler}>Показать выданные СТО</Button>
            </div>
        </>
    )
        ;
};

export default WorkerPanel;