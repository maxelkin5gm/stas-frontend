import React, {useState} from 'react';
import {Button} from "antd";

import containers from '../../../styles/containers.module.scss'
import style from './WorkerPanel.module.scss'
import {useTypeDispatch} from "../../../hooks/useTypeDispatch";
import {WorkerService} from "../../../API/WorkerService";
import {StasStateAction} from "../../../store/stasReducer/stasReducer.type";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import InputCustom from "../../UI/Input/Input";
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
        <div className={containers.panelContainer}>
            <div className={style.flexContainer}>
                <div className={style.top}>
                    <div>
                        <div className={style.input1}>
                            <InputCustom placeholder={"Табельный номер"} type={"number"} valueState={numberInputState}/>
                            <Button type="primary" size="large" onClick={selectByNumberHandler} key={stasIndex}>Выбрать</Button>
                        </div>
                        <div className={style.input2}>
                            <InputCustom placeholder={"ФИО"} valueState={nameInputState}/>
                            <Button type="primary" size="large" onClick={selectByNameHandler}>Выбрать</Button>
                        </div>
                    </div>
                    <div className="reset">
                        <Button type="primary" size="large" onClick={resetHandler}>Сбросить</Button>
                    </div>
                </div>

                <div className={style.bottom}>
                    <div className={style.status}>
                        <span>
                            {worker.name
                                ? `${worker.name} (${worker.personnelNumber})`
                                : "Не выбрано"}
                        </span>
                    </div>
                    <div className={style.show}>
                        <Button type="primary" size="large" onClick={tableHandler}>Показать выданные СТО</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerPanel;