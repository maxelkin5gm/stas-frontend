import React, {useState} from 'react';
import containers from "../../../styles/containers.module.scss";
import {Button} from "antd";
import style from './DetailPanel.module.scss'
import InputCustom from "../../UI/Input/Input";

interface DetailPanelProps {
    stasIndex: number,
}

const DetailPanel = ({stasIndex}: DetailPanelProps) => {
    const detailInputState = useState("");
    const numberInputState = useState("");

    return (
        <div className={containers.panelContainer}>
            <div className={style.container}>
                <InputCustom valueState={detailInputState} placeholder={"Обозначение детали"}/>
                <InputCustom valueState={numberInputState} placeholder={"Номер операции"}/>
                <Button type="primary" size="large">Показать</Button>
            </div>
        </div>
    );
};

export default DetailPanel;