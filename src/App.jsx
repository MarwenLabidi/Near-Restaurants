import { useState, useEffect, useInsertionEffect } from "react";
import DETAILS_CARD from "./components/DETAILS_CARD";
import HEADER from "./components/HEADER";
import MAP from "./components/MAP";
import "./App.css";
import useShowdetails from "./store/ShowCardDetailStore";
import useCoordinateStore from "./store/coordinateStore";
import { getTheCurrentLocation } from "./utils/utils";

function App() {
        const { showdetails, toggleShowdetails } = useShowdetails((state) => ({
                showdetails: state.showdetails,
                toggleShowdetails: state.toggleShowdetails,
        }));
        const { setCoordinate, setBonds } = useCoordinateStore((state) => ({
                setCoordinate: state.setCoordinate,
                setBonds: state.setBonds,
        }));
        //TODO? create ref for the restaurant that you picke when you click on the button detail in the detail card
        // set the current location to the state
        useInsertionEffect(() => {
                getTheCurrentLocation(setCoordinate, setBonds);
        }, []);

        return (
                <>
                        <HEADER />
                        {showdetails && <DETAILS_CARD />}
                        <MAP />
                </>
        );
}

export default App;
