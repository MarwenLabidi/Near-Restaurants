import { useState } from "react";
import DETAILS_CARD from "./components/DETAILS_CARD";
import HEADER from "./components/HEADER";
import MAP from "./components/MAP";

function App() {
        return (
                <>
                        <HEADER />
                        <DETAILS_CARD />
                        <MAP />
                </>
        );
}

export default App;
