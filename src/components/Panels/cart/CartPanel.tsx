import React from 'react';
import containers from "../../../styles/containers.module.scss";
import style from './CartPanel.module.scss'
import TableCustom from "../../UI/Table/TableCustom";

const CartPanel = () => {
    return (
        <div className={containers.panelContainer}>
            <div className={style.container}>
                <TableCustom data={[]} columns={[]}/>
            </div>
        </div>
    );
};

export default CartPanel;