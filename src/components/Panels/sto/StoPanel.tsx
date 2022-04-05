import React, {useState} from 'react';
import containers from "../../../styles/containers.module.scss";
import style from './StoPanel.module.scss'
import {Button} from "antd";
import InputCustom from "../../UI/Input/Input";

interface StoPanelProps {
    stasIndex: number,
}

const StoPanel = ({stasIndex}: StoPanelProps) => {
    const stoInputState = useState("");

    return (
        <div className={containers.panelContainer}>
            <div className={style.container}>
                <InputCustom valueState={stoInputState} placeholder={"Обозначение СТО"}/>
                <Button type="primary" size="large">Показать</Button>
            </div>
        </div>
    );
};

export default StoPanel;