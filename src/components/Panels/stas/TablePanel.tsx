import React from 'react';
import MainTable from "../../Tables/MainTable";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {StasStateEnum} from "../../../store/stasReducer/types/state.types";

interface TablePanelProps {
    stasIndex: number,
}

const TablePanel = ({stasIndex}: TablePanelProps) => {
    const stasState = useTypeSelector(state => state.stasList[stasIndex].state)

    let disabled = false;
    if (stasState === StasStateEnum.GO) disabled = true

    return (
        <>
            <MainTable stasIndex={stasIndex} isLoading={disabled}/>
        </>
    );
};

export default TablePanel;