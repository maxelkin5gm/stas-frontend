import React from 'react';

import {Button} from "antd";

interface ActionPanelProps {
    stasIndex: number,
}

const ActionPanel = ({stasIndex}: ActionPanelProps) => {
    return (
        <>
            <div>
                <h3>Действия</h3>
            </div>

            <div>
                <h3>Выбрана ячейка: <span style={{border: "1px solid black", padding: 5}}>228</span></h3>
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