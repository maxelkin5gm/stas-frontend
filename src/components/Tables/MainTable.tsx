import React from 'react';

import BaseTable from "./BaseTable";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {StasStateActionTypes} from "../../store/stasReducer/stasReducer.type";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";

interface MainTableProps {
    stasIndex: number
}

const MainTable = ({stasIndex}:MainTableProps) => {
    const tableQuery = useTypeSelector(state => state.stasList[stasIndex].table);
    const dispatch = useTypeDispatch();

    function onClickRowHandler(row: any, index: number | undefined) {
        dispatch({
            type: StasStateActionTypes.SET_SELECTED_CELL,
            stasIndex: 0,
            selectedCell: {
                cellNumber: row.cellNumber,
                side: row.side
            }
        })
    }

    function onDoubleClickHandler(row: any) {
        console.log("dbl click")
        console.log(row)
    }

    return (
        <BaseTable onClickRow={onClickRowHandler} onDoubleClickRow={onDoubleClickHandler} tableQuery={tableQuery}/>
    );
};

export default MainTable;