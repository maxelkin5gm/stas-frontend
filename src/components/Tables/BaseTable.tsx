import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";


import {TableQuery} from "../../store/stasReducer/types/table.types";
import {fillTable} from "./fillTable";
import {AppStateActionTypes} from "../../store/appReducer/appReducer.type";
import "./BaseTable.css"
import {StasStateActionTypes} from "../../store/stasReducer/stasReducer.type";

interface BaseTableProps {
    tableQuery: TableQuery,
    onClickRow: (row: any, index: number | undefined) => void
    onDoubleClickRow: (row:any, index: number | undefined) => void
}

const BaseTable = ({tableQuery, onClickRow, onDoubleClickRow}: BaseTableProps) => {
    const dispatch = useTypeDispatch();
    const [selectedRow, setSelectedRow] = useState(0)
    const [tableState, setTableState] = useState({
        columns: [] as any[],
        data: [] as any[]
    })

    function onRow(row: any, index: number | undefined) {
        return {
            onClick: () => {
                setSelectedRow(row.key)
                onClickRow(row, index)
            },
            onDoubleClick: () => {
                onDoubleClickRow(row, index)
            },
        };
    }

    useEffect(() => {
        fillTable(tableQuery, setTableState)
            .catch((e: Error) => dispatch({
                type: AppStateActionTypes.SET_ERROR_MODAL,
                visible: true,
                title: "Ошибка",
                text: e.message
            }))
    }, [tableQuery, dispatch])

    if (tableState.data.length === 0) {

    }

    return (
        <Table
            pagination={false}
            size={"small"}

            dataSource={tableState.data}
            columns={tableState.columns}

            rowSelection={{type: "radio", selectedRowKeys: [selectedRow]}}
            onRow={onRow}
        />
    );
};

export default BaseTable;