import React, {useEffect, useState} from 'react';
import TableCustom from "../../../Table/TableCustom";
import {useTypeSelector} from "../../../../hooks/useTypeSelector";
import {fillTable} from "./fillTable";

interface TablePanelProps {
    stasIndex: number,
}

const TablePanel = ({stasIndex}: TablePanelProps) => {
    const tableInfo = useTypeSelector(state => state.tableList[stasIndex])
    const worker = useTypeSelector(state => state.stasList[stasIndex].worker)

    const [tableState, setTableState] = useState({
        columns: [],
        data: []
    })

    useEffect(() => {
        fillTable(tableInfo, worker, setTableState)
    }, [tableInfo, worker])

    return (
        <>
            <TableCustom data={tableState.data} columns={tableState.columns}/>
        </>
    );
};

export default TablePanel;