import React from 'react';

import {Button} from "antd";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useTypeDispatch} from "../../../hooks/useTypeDispatch";
import {StasStateActionTypes} from "../../../store/stasReducer/stasReducer.type";
import {StasStateEnum} from "../../../store/stasReducer/types/state.types";

interface ActionPanelProps {
    stasIndex: number,
}

const ActionPanel = ({stasIndex}: ActionPanelProps) => {
    let {cellNumber, side} = useTypeSelector(state => state.stasList[stasIndex].selectedCell);
    const stasState = useTypeSelector(state => state.stasList[stasIndex].state);
    const dispatch = useTypeDispatch()

    function getCellHandler() {
        dispatch({
            type: StasStateActionTypes.SET_STATE,
            stasIndex,
            state: StasStateEnum.GO
        })
        setTimeout(() => {
            dispatch({
                type: StasStateActionTypes.SET_STATE,
                stasIndex,
                state: StasStateEnum.WAIT
            })
        }, 2000)
    }

    function giveCellHandler() {
        dispatch({
            type: StasStateActionTypes.SET_STATE,
            stasIndex,
            state: StasStateEnum.GO
        })
        setTimeout(() => {
            dispatch({
                type: StasStateActionTypes.SET_STATE,
                stasIndex,
                state: StasStateEnum.READY
            })
        }, 2000)
    }

    function removeCellHandler() {
        dispatch({
            type: StasStateActionTypes.SET_STATE,
            stasIndex,
            state: StasStateEnum.READY
        })
    }

    return (
        <>
            <div>
                <h3>Действия</h3>
            </div>

            <div>
                {cellNumber && side
                    ? <h3>Выбрано: <span style={{border: "1px solid black", padding: 5}}>{cellNumber} {side}</span></h3>
                    : <h3>Ячейка не выбрана</h3>
                }
            </div>

            <div>
                <Button disabled={stasState === StasStateEnum.GO || stasState === StasStateEnum.WAIT}
                        style={{width: "90%"}} type="primary" size="middle"
                        onClick={getCellHandler}>Привезти</Button>
            </div>

            <div>
                <Button disabled={stasState === StasStateEnum.GO || stasState === StasStateEnum.READY}
                        style={{width: "90%"}} type="primary" size="middle" onClick={giveCellHandler}>Увезти</Button>
            </div>

            <div>
                <Button disabled={stasState === StasStateEnum.GO || stasState === StasStateEnum.READY}
                        style={{width: "90%"}} type="primary" size="middle" onClick={removeCellHandler}>Снять</Button>
            </div>
        </>
    );
};

export default ActionPanel;