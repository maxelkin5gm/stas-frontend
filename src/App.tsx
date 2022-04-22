import React from 'react';

import NavBar from "./components/NavBar/NavBar";
import StasTab from "./tabs/StasTab";
import containers from "./styles/containers.module.scss"

function App() {
    return (
        <>
            <NavBar/>

            <div className={containers.tabContainer}>
                <StasTab stasIndex={0}/>
                <StasTab stasIndex={1}/>
                <StasTab stasIndex={2}/>
            </div>
        </>
    );
}

export default App;
