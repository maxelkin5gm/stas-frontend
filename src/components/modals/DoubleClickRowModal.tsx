import React, {useEffect, useState} from 'react';
import {Button} from "antd";

import BaseModal from "./BaseModal";
import InputNumber from "../Input/InputNumber";
import cl from "./DoubleClickRowModal.module.scss";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {StasStateEnum} from "../../store/stasReducer/types/state.types";
import {Cart} from "../../store/stasReducer/types/cart.types";
import {CartService} from "../../API/CartService";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";
import {StasStateActionTypes} from "../../store/stasReducer/stasReducer.type";
import {AppStateActionTypes} from "../../store/appReducer/appReducer.type";

interface DoubleClickRowModalProps {
    modalState: {
        visible: boolean,
        row: any
    }
    onClose: () => void,
    stasIndex: number
}

const DoubleClickRowModal = ({modalState, onClose, stasIndex}: DoubleClickRowModalProps) => {
    const dispatch = useTypeDispatch();
    const stasState = useTypeSelector(state => state.stasList[stasIndex].state)
    const cart = useTypeSelector(state => state.stasList[stasIndex].cart)
    const countStoInputState = useState(1);
    const [noteInputState, setNoteInputState] = useState(modalState.row.note)

    useEffect(() => {
        setNoteInputState(modalState.row.note)
    }, [modalState.row.note])

    if (!modalState.visible) return null;

    function saveNoteHandler() {

    }

    function addToCartHandler() {
        const newItem: Cart = {
            key: modalState.row.sto,
            sto: modalState.row.sto,
            amount: countStoInputState[0],
            detail: "test detail",
            operationNumber: "test operation"
        }
        const fullAmount = 10;

        const newCart = CartService.add(cart, newItem, fullAmount);

        if (newCart) {
            dispatch({
                type: StasStateActionTypes.SET_CART,
                stasIndex: stasIndex,
                cart: newCart
            })
        } else
            dispatch({type: AppStateActionTypes.SET_ERROR_MODAL, visible: true, title: "error", text: "error"})
    }

    return (
        <BaseModal onClose={onClose}>
            <div className={cl.modal}>

                {stasState === StasStateEnum.WAIT
                    ? <div className={cl.leftSide}>
                        <h3>Выбрано: {modalState.row.sto}</h3>
                        <select multiple>
                            <option value="боеголовка 228">боеголовка 228</option>
                            <option value="корпус 229">корпус 229</option>
                        </select>
                        <InputNumber valueState={countStoInputState}/>
                        <Button type="primary" size="middle" onClick={addToCartHandler}>Добавить в корзину</Button>
                    </div>
                    : null}


                <div className={cl.rightSide}>
                    <h3>Изменение примечания</h3>
                    <textarea value={noteInputState} onChange={e => setNoteInputState(e.target.value)}></textarea>
                    <Button type="primary" size="middle" onClick={saveNoteHandler}>Сохранить</Button>
                </div>

            </div>
        </BaseModal>
    );
};

export default DoubleClickRowModal;