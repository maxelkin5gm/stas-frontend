import React from 'react';
import containers from "../../../styles/containers.module.scss";
import {Button} from "antd";
import style from './ActionPanel.module.scss'

const ActionPanel = () => {
    return (
        <div className={containers.panelContainer}>
            <div className={style.container}>
                <h1>Действия</h1>
                <h2>Выбрана ячейка - ...</h2>
                <Button type="primary" size="large">Привезти</Button>
                <br/>
                <Button type="primary" size="large">Увезти</Button>
                <br/>
                <Button type="primary" size="large">Снять</Button>
            </div>
        </div>
    );
};

export default ActionPanel;