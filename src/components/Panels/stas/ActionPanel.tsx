import React from 'react';

import {Button} from "antd";
import {useTypeSelector} from "../../../hooks/useTypeSelector";

interface ActionPanelProps {
    stasIndex: number,
}

const ActionPanel = ({stasIndex}: ActionPanelProps) => {
    let {cellNumber, side} = useTypeSelector(state => state.stasList[stasIndex].selectedCell)

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
                <Button style={{width: "90%"}} type="primary" size="middle">Привезти</Button>
            </div>

            <div>
                <Button style={{width: "90%"}} type="primary" size="middle">Увезти</Button>
            </div>

            <div>
                <Button style={{width: "90%"}} type="primary" size="middle">Снять</Button>
            </div>
        </>
    );
};

export default ActionPanel;