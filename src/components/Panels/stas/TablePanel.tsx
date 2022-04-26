import React from 'react';
import MainTable from "../../Tables/MainTable";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {StasStateEnum} from "../../../store/stasReducer/types/state.types";

interface TablePanelProps {
    stasIndex: number,
}

const TablePanel = ({stasIndex}: TablePanelProps) => {
    const stasState = useTypeSelector(state => state.stasList[stasIndex].state)

    return (
        <>
            <MainTable stasIndex={stasIndex} isLoading={stasState === StasStateEnum.GO}/>
        </>
    );
};

export default TablePanel;