import React from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import style from "./SearchAllTab.module.scss";

const AdminTab = () => {
    const tabIndex = useTypeSelector(state => state.app.tabIndex)
    const displayStyle = (tabIndex === 4) ? {} : {display: "none"}

    return (
        <div className={style.tab} style={displayStyle}>

            <h1>Admin</h1>

        </div>
    );
};

export default AdminTab;