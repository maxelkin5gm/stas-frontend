import React from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import style from "./StasTab.module.scss"
import WorkerPanel from "../components/Panels/stas/WorkerPanel";
import TablePanel from "../components/Panels/stas/table/TablePanel";
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
        <div className={style.tab} style={displayStyle}>
            <div className={style.worker}>
                <WorkerPanel stasIndex={stasIndex}/>
            </div>
            <div className={style.detail}>
                <DetailPanel stasIndex={stasIndex}/>
            </div>
            <div className={style.sto}>
                <StoPanel stasIndex={stasIndex}/>
            </div>
            <div className={style.cell}>
                <CellPanel stasIndex={stasIndex}/>
            </div>
            <div className={style.table}>
                <TablePanel stasIndex={stasIndex}/>
            </div>
            <div className={style.cart}>
                <CartPanel stasIndex={stasIndex} />
            </div>
            <div className={style.action}>
                <ActionPanel stasIndex={stasIndex} />
            </div>
            <div className={style.status}>
                <StatusPanel />
            </div>
        </div>
    );
};

export default StasTab;