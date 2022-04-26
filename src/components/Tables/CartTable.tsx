import React from 'react';
import BaseTable from "./BaseTable";
import {TableTypeEnum} from "../../store/stasReducer/types/table.types";
import {useTypeSelector} from "../../hooks/useTypeSelector";

interface CartTableProps {
    stasIndex: number
}

const CartTable = ({stasIndex}: CartTableProps) => {
    const cart = useTypeSelector(state => state.stasList[stasIndex].cart)

    return (
        <BaseTable tableQuery={{type: TableTypeEnum.CART, query: cart}} />
    );
};

export default CartTable;