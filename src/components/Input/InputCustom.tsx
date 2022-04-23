import React, {ChangeEvent, HTMLInputTypeAttribute} from 'react';
import cl from './InputcCustom.module.scss'

interface InputCustomProps {
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    valueState: [string, React.Dispatch<React.SetStateAction<string>>]
}

const InputCustom = ({type = "text", placeholder = "", valueState}: InputCustomProps) => {

    const [value, setValue] = valueState;

    function handler(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setValue(value.toUpperCase());
    }

    return (
        <input type={type} className={cl.input} value={value} onChange={handler} placeholder={placeholder}/>
    );
};

export default InputCustom;