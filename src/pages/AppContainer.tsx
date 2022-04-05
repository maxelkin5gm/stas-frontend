import React from 'react';
import containers from "../styles/containers.module.scss";

interface AppContainerProps {
    children: React.ReactNode
}

const AppContainer = ({children}: AppContainerProps) => {
    return (
        <section className={containers.appContainer}>
            <div className={containers.container}>
                {children}
            </div>
        </section>
    );
};

export default AppContainer;