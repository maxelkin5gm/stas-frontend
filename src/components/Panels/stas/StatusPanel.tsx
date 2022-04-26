import React from 'react';
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {StasStateEnum} from "../../../store/stasReducer/types/state.types";

interface StatusPanelProps {
    stasIndex: number
}

const StatusPanel = ({stasIndex}: StatusPanelProps) => {
    const stasState = useTypeSelector(state => state.stasList[stasIndex].state)
    let status;
    switch (stasState) {
        case StasStateEnum.READY:
            status = "Готов";
            break;
        case StasStateEnum.GO:
            status = "В пути";
            break;
        case StasStateEnum.WAIT:
            status = "Ожидает";
            break;
    }

    return (
        <>
            <div>
                <h3>Статус</h3>
            </div>

            <div>
                <h3 style={{border: "1px solid black", padding: 5}}>{status}</h3>
            </div>

            <div>
                <h3>Последнее действие</h3>
            </div>

            <div>
                <h3 style={{border: "1px solid black", padding: 5}}>Неизвестно</h3>
            </div>
        </>
    );
};

export default StatusPanel;