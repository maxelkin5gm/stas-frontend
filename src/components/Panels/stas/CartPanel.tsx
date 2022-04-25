import React, {useEffect, useState} from 'react';

import MainTable from "../../Table/MainTable";
import {Button} from "antd";
import {fillTable} from "./table/fillTable";
import {useTypeSelector} from "../../../hooks/useTypeSelector";

interface CartPanelProps {
    stasIndex: number,
}

const CartPanel = ({stasIndex}: CartPanelProps) => {
    const tableQuery = useTypeSelector(state => state.stasList[stasIndex].table)

    const [tableState, setTableState] = useState({
        columns: [],
        data: []
    })

    useEffect(() => {
        fillTable(tableQuery, setTableState)
    }, [tableQuery])


    return (
        <>
            <div style={{minHeight: "150px", overflow: "auto", border: "1px solid black"}}>
                <MainTable data={tableState.data} columns={tableState.columns}/>
            </div>


            <div style={{display: "grid", gridTemplate: "1fr 1fr / 1fr 1fr", gridGap: "5px"}}>
                <Button type="primary" size="middle">Выбрать все</Button>
                <Button type="primary" size="middle">Выдать</Button>
                <Button type="primary" size="middle">Очистить</Button>
                <Button type="primary" size="middle">Положить</Button>
            </div>
        </>
    );
};

export default CartPanel;