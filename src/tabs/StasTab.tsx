import React from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import style from "./StasTab.module.scss"
import WorkerPanel from "../components/Panels/worker/WorkerPanel";
import TablePanel from "../components/Panels/table/TablePanel";
import DetailPanel from "../components/Panels/detail/DetailPanel";
import StoPanel from "../components/Panels/sto/StoPanel";
import CellPanel from "../components/Panels/cell/CellPanel";
import ActionPanel from "../components/Panels/action/ActionPanel";
import StatusPanel from "../components/Panels/status/StatusPanel";
import CartPanel from "../components/Panels/cart/CartPanel";

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