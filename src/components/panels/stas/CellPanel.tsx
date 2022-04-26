import React, {useState} from 'react';
import {Button, Radio} from "antd";
import InputCustom from "../../Input/InputCustom";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {StasStateEnum} from "../../../store/stasReducer/types/state.types";

interface CellPanelProps {
    stasIndex: number,
}

const CellPanel = ({stasIndex}: CellPanelProps) => {
    const stasState = useTypeSelector(state => state.stasList[stasIndex].state);
    const cellInputState = useState("");
    const [radioValue, setRadioValue] = useState("ПРАВО");

    return (
        <>
            <div>
                <InputCustom type={"number"} valueState={cellInputState} placeholder={"№ ячейки"}/>
            </div>

            <div>
                <Radio.Group size="small" defaultValue="ПРАВО" buttonStyle="solid" value={radioValue} onChange={(e => setRadioValue(e.target.value))}>
                    <Radio.Button value="ПРАВО">ПРАВО</Radio.Button>
                    <Radio.Button value="ЛЕВО ">ЛЕВО</Radio.Button>
                </Radio.Group>
            </div>

            <div style={{gridColumn: "span 2"}}>
                <Button disabled={stasState !== StasStateEnum.READY} type="primary" size="middle">Показать</Button>
            </div>

            <div style={{gridColumn: "span 2"}}>
                <Button disabled={stasState !== StasStateEnum.WAIT} type="primary" size="middle">Показать привезенную</Button>
            </div>
        </>

    );
};

export default CellPanel;