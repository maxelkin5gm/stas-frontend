import React from 'react';

import NavBar from "./components/NavBar/NavBar";
import StasPage from "./pages/StasPage";
import AppContainer from "./pages/AppContainer";

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
