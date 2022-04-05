import React from 'react';

import style from './StasPage.module.scss'
import {useTypeSelector} from "../hooks/useTypeSelector";
import WorkerPanel from "../components/Panels/worker/WorkerPanel";
import DetailPanel from "../components/Panels/detail/DetailPanel";
import StoPanel from "../components/Panels/sto/StoPanel";
import CellPanel from "../components/Panels/cell/CellPanel";
import TablePanel from "../components/Panels/table/TablePanel";
import CartPanel from "../components/Panels/cart/CartPanel";

interface StasPageProps {
    stasIndex: number,
}

const StasPage = ({stasIndex}: StasPageProps) => {
    const tabIndex = useTypeSelector(state => state.app.tabIndex)
    const displayStyle = (tabIndex === stasIndex) ? {} : {display: "none"}

    return (
        <div className={style.grid} style={displayStyle}>
            <div className={[style.grid__item, style.workerPanel].join(' ')}>
                <WorkerPanel stasIndex={stasIndex}/>
            </div>
            <div className={[style.grid__item, style.detailPanel].join(' ')}>
                <DetailPanel stasIndex={stasIndex}/>
            </div>
            <div className={[style.grid__item, style.stoPanel].join(' ')}>
                <StoPanel stasIndex={stasIndex}/>
            </div>
            <div className={[style.grid__item, style.cellPanel].join(' ')}>
                <CellPanel stasIndex={stasIndex}/>
            </div>
            <div className={[style.grid__item, style.tablePanel].join(' ')}>
                <TablePanel stasIndex={stasIndex}/>
            </div>
            <div className={[style.grid__item, style.cartPanel].join(' ')}>
                <CartPanel />
            </div>
            <div className={[style.grid__item, style.actionPanel].join(' ')}>
            </div>
            <div className={[style.grid__item, style.statusPanel].join(' ')}>
            </div>
        </div>
    );
};

export default StasPage;