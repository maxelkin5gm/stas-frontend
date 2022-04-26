import React, {useState} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";

import BaseTable from "./BaseTable";
import {StasStateActionTypes} from "../../store/stasReducer/stasReducer.type";
import DoubleClickRowModal from "../Modals/DoubleClickRowModal";

interface MainTableProps {
    stasIndex: number,
    isLoading?: boolean
}

const MainTable = ({stasIndex, isLoading}: MainTableProps) => {
    const tableQuery = useTypeSelector(state => state.stasList[stasIndex].table);
    const dispatch = useTypeDispatch();

    const [modalState, setModalState] = useState({
        visible: false,
        row: {} as any
    })

    function onClickRowHandler(row: any) {
        dispatch({
            type: StasStateActionTypes.SET_SELECTED_CELL,
            stasIndex,
            selectedCell: {
                cellNumber: row.cellNumber,
                side: row.side
            }
        })
    }

    function onDoubleClickHandler(row: any) {
        setModalState({row, visible: true})
    }

    return (
        <>
            <BaseTable isLoading={isLoading} onClickRow={onClickRowHandler} onDoubleClickRow={onDoubleClickHandler}
                       tableQuery={tableQuery}/>


            <DoubleClickRowModal stasIndex={stasIndex} modalState={modalState}
                                 onClose={() => setModalState({...modalState, visible: false})}/>

        </>
    );
};

export default MainTable;