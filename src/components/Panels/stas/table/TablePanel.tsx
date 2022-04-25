import React, {useEffect, useState} from 'react';
import MainTable from "../../../Table/MainTable";
import {useTypeSelector} from "../../../../hooks/useTypeSelector";
import {fillTable} from "./fillTable";

interface TablePanelProps {
    stasIndex: number,
}

const TablePanel = ({stasIndex}: TablePanelProps) => {
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
            <MainTable data={tableState.data} columns={tableState.columns}/>
        </>
    );
};

export default TablePanel;