import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";

import {TableQuery} from "../../store/stasReducer/types/table.types";
import {fillTable} from "./fillTable";
import {AppStateActionTypes} from "../../store/appReducer/appReducer.type";
import "./BaseTable.css"

interface BaseTableProps {
    tableQuery: TableQuery,
    onClickRow?: (row: any, index: number | undefined) => void
    onDoubleClickRow?: (row:any, index: number | undefined) => void,
    isLoading?: boolean
}

const BaseTable = ({tableQuery, onClickRow, onDoubleClickRow, isLoading}: BaseTableProps) => {
    const dispatch = useTypeDispatch();
    const [selectedRow, setSelectedRow] = useState(0)
    const [tableState, setTableState] = useState({
        columns: [] as any[],
        data: [] as any[]
    })

    function onRow(row: any, index: number | undefined) {
        return {
            onClick: () => {
                if (onClickRow) {
                    setSelectedRow(row.key)
                    onClickRow(row, index)
                }
            },
            onDoubleClick: () => {
                if (onDoubleClickRow) {
                    onDoubleClickRow(row, index)
                }
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

    return (
        <Table
            tableLayout={"auto"}
            loading={isLoading}
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