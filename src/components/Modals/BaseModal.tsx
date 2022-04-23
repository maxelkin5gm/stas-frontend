import React from 'react';

import cl from "./BaseModal.module.scss"

interface BaseModalProps {
    children?: React.ReactNode
}

const BaseModal = ({children}: BaseModalProps) => {
    return (
        <div className={cl.baseModal}>
            <div className={cl.baseModal__content}>
                {children}
            </div>
        </div>
    );
};

export default BaseModal;