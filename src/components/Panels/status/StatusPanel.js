import React from 'react';
import containers from "../../../styles/containers.module.scss";
import style from './StatusPanel.module.scss'

const StatusPanel = () => {
    return (
        <div className={containers.panelContainer}>
            <div className={style.container}>
                <h1>Статус</h1>
                <h3>Готов</h3>
                <br/>
                <h1>Последнее действие</h1>
                <h3>Отсутсвует</h3>
            </div>
        </div>
    );
};

export default StatusPanel;