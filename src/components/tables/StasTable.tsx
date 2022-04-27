import React, {useEffect, useState} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";

import BaseTable from "./BaseTable/BaseTable";
import {StasStateActionTypes} from "../../store/stasReducer/stasReducer.type";
import DoubleClickRowModal from "../modals/DoubleClickRowModal";
import {AppStateActionTypes} from "../../store/appReducer/appReducer.type";
import {fillStasTable} from "./utils/fillStasTable";

interface MainTableProps {
    stasIndex: number,
    isLoading?: boolean
}

const StasTable = ({stasIndex, isLoading}: MainTableProps) => {
    const tableQuery = useTypeSelector(state => state.stasList[stasIndex].table);
    const dispatch = useTypeDispatch();

    const [modalState, setModalState] = useState({
        visible: true,
        row: {} as any
    })
    const [tableState, setTableState] = useState({
        columns: [] as any[],
        data: [] as any[]
    })

    function onClickRowHandler(row: any) {
        dispatch({
            type: StasStateActionTypes.SET_SELECTED_CELL,
            stasIndex,
            selectedCell: {
                cellNumber: row.cellNumber,
                side: row.side,
                status: row.status
            }
        })
    }

    function onDoubleClickHandler(row: any) {
        setModalState({row, visible: true})
    }

    useEffect(() => {
        dispatch({type: AppStateActionTypes.SET_LOADING, isLoading: true})
        fillStasTable(tableQuery, stasIndex, setTableState)
            .finally(() => dispatch({type: AppStateActionTypes.SET_LOADING, isLoading: false}))
            .catch((e: Error) => dispatch({
                type: AppStateActionTypes.SET_ERROR_MODAL,
                visible: true,
                title: "Ошибка",
                text: e.message
            }))
    }, [tableQuery, stasIndex, dispatch])

    return (
        <>
            <BaseTable tableState={tableState}
                       isLoading={isLoading}
                       onClickRow={onClickRowHandler}
                       onDoubleClickRow={onDoubleClickHandler}/>


            <DoubleClickRowModal stasIndex={stasIndex} modalState={modalState}
                                 onClose={() => setModalState({...modalState, visible: false})}/>

        </>
    );
};

export default StasTable;