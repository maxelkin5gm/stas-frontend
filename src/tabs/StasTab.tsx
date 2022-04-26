import React from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";

import cl from "./StasTab.module.scss"
import WorkerPanel from "../components/Panels/stas/WorkerPanel";
import TablePanel from "../components/Panels/stas/TablePanel";
import DetailPanel from "../components/Panels/stas/DetailPanel";
import StoPanel from "../components/Panels/stas/StoPanel";
import CellPanel from "../components/Panels/stas/CellPanel";
import ActionPanel from "../components/Panels/stas/ActionPanel";
import StatusPanel from "../components/Panels/stas/StatusPanel";
import CartPanel from "../components/Panels/stas/CartPanel";

interface StasTabProps {
    stasIndex: number,
}

const StasTab = ({stasIndex}: StasTabProps) => {
    const tabIndex = useTypeSelector(state => state.app.tabIndex)
    const displayStyle = (tabIndex === stasIndex) ? {} : {display: "none"}

    return (
        <div className={cl.tab} style={displayStyle}>
            <div className={cl.worker}>
                <WorkerPanel stasIndex={stasIndex}/>
            </div>
            <div className={cl.detail}>
                <DetailPanel stasIndex={stasIndex}/>
            </div>
            <div className={cl.sto}>
                <StoPanel stasIndex={stasIndex}/>
            </div>
            <div className={cl.cell}>
                <CellPanel stasIndex={stasIndex}/>
            </div>
            <div className={cl.table}>
                <TablePanel stasIndex={stasIndex}/>
            </div>
            <div className={cl.cart}>
                <CartPanel stasIndex={stasIndex} />
            </div>
            <div className={cl.action}>
                <ActionPanel stasIndex={stasIndex} />
            </div>
            <div className={cl.status}>
                <StatusPanel stasIndex={stasIndex} />
            </div>
        </div>
    );
};

export default StasTab;