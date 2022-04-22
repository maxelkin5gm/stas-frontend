import React, {useEffect, useState} from 'react';
import TableCustom from "../../../Table/TableCustom";
import {useTypeSelector} from "../../../../hooks/useTypeSelector";
import {fillTable} from "../../stas/table/fillTable";

const TablePanel = () => {
    const stasIndex = 0;
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