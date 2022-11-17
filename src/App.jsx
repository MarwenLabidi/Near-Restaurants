import { useState } from "react";
import DETAILS_CARD from "./components/DETAILS_CARD";
import HEADER from "./components/HEADER";
import MAP from "./components/MAP";
import "./App.css";
import useShowdetails from "./store/store";

function App() {
        const { showdetails, toggleShowdetails } = useShowdetails((state) => ({
                showdetails: state.showdetails,
                toggleShowdetails: state.toggleShowdetails,
        }));
        //TODO? useeffect to set the current courdinate
        //TODO? useEffect to get the restaurant whatevent the cooridnate and boundsstate change

        return (
                <>
                        <HEADER />
                        {showdetails && <DETAILS_CARD />}
                        <MAP />
                </>
        );
}

export default App;
//-[] create zustand store : showdetails :fale, coordinate :{lg,wg}, bounds : {ne: null, sw: null} place : []
//-[] create the direction feature
//-[] add rating starts from material ui
