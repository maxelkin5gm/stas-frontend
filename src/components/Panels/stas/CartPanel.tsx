import React from 'react';
import {Button} from "antd";

import CartTable from "../../Tables/CartTable";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {StasStateEnum} from "../../../store/stasReducer/types/state.types";
import {useTypeDispatch} from "../../../hooks/useTypeDispatch";
import {StasStateActionTypes} from "../../../store/stasReducer/stasReducer.type";

interface CartPanelProps {
    stasIndex: number,
}

const CartPanel = ({stasIndex}: CartPanelProps) => {
    const stasState = useTypeSelector(state => state.stasList[stasIndex].state);
    const dispatch = useTypeDispatch();

    let disabled = true;
    if (stasState === StasStateEnum.WAIT) disabled = false;
    // else dispatch({
    //     type: StasStateActionTypes.SET_CART,
    //     stasIndex,
    //     cart: []
    // })

    return (
        <>
            <div style={{minHeight: "150px", overflow: "auto", border: "1px solid black"}}>
                <CartTable stasIndex={stasIndex}/>
            </div>


            <div style={{display: "grid", gridTemplate: "1fr 1fr / 1fr 1fr", gridGap: "5px"}}>
                <Button disabled={disabled} type="primary" size="middle">Выбрать все</Button>
                <Button disabled={disabled} type="primary" size="middle">Выдать</Button>
                <Button disabled={disabled} type="primary" size="middle">Очистить</Button>
                <Button disabled={disabled} type="primary" size="middle">Положить</Button>
            </div>
        </>
    );
};

export default CartPanel;