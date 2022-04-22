import React from 'react';
import style from "./Loader.module.scss"
import {useTypeSelector} from "../../../hooks/useTypeSelector";

const Loader = () => {
    const isLoading = useTypeSelector((state) => state.app.isLoading)

    if (!isLoading) return null;

    return (
        <div className={style.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;