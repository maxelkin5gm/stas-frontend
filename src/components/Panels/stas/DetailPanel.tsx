import React, {useState} from 'react';
import {Button} from "antd";
import InputCustom from "../../UI/Input/InputCustom";

interface DetailPanelProps {
    stasIndex: number,
}

const DetailPanel = ({stasIndex}: DetailPanelProps) => {
    const detailInputState = useState("");
    const numberInputState = useState("");

    return (
        <>
            <div>
                <InputCustom valueState={detailInputState} placeholder={"Обозначение детали"}/>
            </div>

            <div>
                <InputCustom valueState={numberInputState} placeholder={"Номер операции"}/>
            </div>

            <div style={{textAlign: "center"}}>
                <Button type="primary" size="middle">Показать</Button>
            </div>
        </>
    );
};

export default DetailPanel;