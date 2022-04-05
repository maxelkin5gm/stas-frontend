import React, {useState} from 'react';
import containers from "../../../styles/containers.module.scss";
import style from './CellPanel.module.scss'
import {Button, Radio} from "antd";
import InputCustom from "../../UI/Input/Input";

interface CellPanelProps {
    stasIndex: number,
}

const CellPanel = ({stasIndex}: CellPanelProps) => {
    const cellInputState = useState("");
    const [radioValue, setRadioValue] = useState("ПРАВО");

    return (
        <div className={containers.panelContainer}>
            <div className={style.container}>
                <div className="inputs">
                    <Radio.Group defaultValue="ПРАВО" buttonStyle="solid" value={radioValue} onChange={(e => setRadioValue(e.target.value))}>
                        <Radio.Button value="ПРАВО">Право</Radio.Button>
                        <Radio.Button value="ЛЕВО">Лево</Radio.Button>
                    </Radio.Group>
                    <InputCustom type={"number"} valueState={cellInputState} placeholder={"Номер ячейки"}/>
                </div>
                <Button type="primary" size={"middle"}>Показать</Button>
                <br/>
                <Button type="primary">Показать привезенную ячейку</Button>
            </div>
        </div>
    );
};

export default CellPanel;