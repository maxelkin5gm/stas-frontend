import React from 'react';

import NavBar from "./components/NavBar/NavBar";
import StasPage from "./tabs/StasPage";
import AppContainer from "./tabs/AppContainer";

function App() {
    return (
        <>
            <NavBar/>

            <AppContainer>
                <StasPage stasIndex={0}/>
                <StasPage stasIndex={1}/>
                <StasPage stasIndex={2}/>
            </AppContainer>
        </>
    );
}

export default App;
