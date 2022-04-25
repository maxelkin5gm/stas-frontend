import React from 'react';
import MainTable from "../../Tables/MainTable";

interface TablePanelProps {
    stasIndex: number,
}

const TablePanel = ({stasIndex}: TablePanelProps) => {

    return (
        <>
            <MainTable stasIndex={stasIndex}/>
        </>
    );
};

export default TablePanel;