import React from 'react';
import style from "./SearchAllTab.module.scss";
import {useTypeSelector} from "../hooks/useTypeSelector";
import WorkerPanel from "../components/Panels/searchAll/WorkerPanel";
import DetailPanel from "../components/Panels/searchAll/DetailPanel";
import StoPanel from "../components/Panels/searchAll/StoPanel";
import RemainderStoPanel from "../components/Panels/searchAll/RemainderStoPanel";
import TablePanel from "../components/Panels/searchAll/table/TablePanel";

const SearchAllTab = () => {
    const tabIndex = useTypeSelector(state => state.app.tabIndex)
    const displayStyle = (tabIndex === 3) ? {} : {display: "none"}

    return (
        <div className={style.tab} style={displayStyle}>

            <div className={style.worker}>
                <WorkerPanel/>
            </div>

            <div className={style.detail}>
                <DetailPanel/>
            </div>

            <div className={style.sto}>
                <StoPanel/>
            </div>

            <div className={style.remainderSto}>
                <RemainderStoPanel/>
            </div>

            <div className={style.table}>
                <TablePanel/>
            </div>

        </div>
    );
};

export default SearchAllTab;