import { useState,useEffect } from "react";
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
        const { coordinate, bounds, setCoordinate, setBonds } =
        useCoordinateStore((state) => ({
                coordinate: state.coordinate,
                bounds: state.bounds,
                setCoordinate: state.setCoordinate,
                setBonds: state.setBonds,
        }));
        // set the current location to the state
        useEffect(() => {
                getTheCurrentLocation(setCoordinate);
        }, []);
        //TODO? useEffect to get the restaurant whatevent the cooridnate and boundsstate change
        useEffect(() => {
                console.log(coordinate);
        }, [coordinate]);

        return (
                <>
                        <HEADER />
                        {showdetails && <DETAILS_CARD />}
                        <MAP />
                </>
        );
}

export default App;


