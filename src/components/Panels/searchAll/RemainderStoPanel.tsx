import React, {useState} from 'react';
import InputCustom from "../../UI/Input/InputCustom";
import {Button} from "antd";

const RemainderStoPanel = () => {
    const stoInputState = useState("");
    const remainderInputState = useState("");


    return (
        <>
            <div>
                <InputCustom valueState={stoInputState} placeholder={"Обозначение СТО"}/>
            </div>

            <div>
                <InputCustom type={"number"} valueState={remainderInputState} placeholder={"Остаток"}/>
            </div>

            <div>
                <Button type="primary" size="large">Показать кому выдано</Button>
            </div>
        </>
    );
};

export default RemainderStoPanel;