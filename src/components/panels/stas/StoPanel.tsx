import React, {useState} from 'react';
import {Button} from "antd";
import InputCustom from "../../Input/InputCustom";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {StasStateEnum} from "../../../store/stasReducer/types/state.types";

interface StoPanelProps {
    stasIndex: number,
}

const StoPanel = ({stasIndex}: StoPanelProps) => {
    const stasState = useTypeSelector(state => state.stasList[stasIndex].state);
    const stoInputState = useState("");

    return (
        <>
            <div>
                <InputCustom valueState={stoInputState} placeholder={"Обозначение СТО"}/>
            </div>
            <div style={{textAlign: "center"}}>
                <Button disabled={stasState !== StasStateEnum.READY} type="primary" size="middle">Показать</Button>
            </div>
        </>
    );
};

export default StoPanel;