import React, {useState} from 'react';
import {Button} from "antd";
import InputCustom from "../../UI/Input/InputCustom";

interface StoPanelProps {
    stasIndex: number,
}

const StoPanel = ({stasIndex}: StoPanelProps) => {
    const stoInputState = useState("");

    return (
        <>
            <div>
                <InputCustom valueState={stoInputState} placeholder={"Обозначение СТО"}/>
            </div>
            <div style={{textAlign: "center"}}>
                <Button type="primary" size="middle">Показать</Button>
            </div>
        </>
    );
};

export default StoPanel;