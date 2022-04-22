import React from 'react';

import style from "./ButtonCustom.module.scss"

interface ButtonCustomProps {
    children: React.ReactNode
}

const ButtonCustom = ({children}: ButtonCustomProps) => {
    return (
        <button className={style.button}>
            {children}
        </button>
    );
};

export default ButtonCustom;