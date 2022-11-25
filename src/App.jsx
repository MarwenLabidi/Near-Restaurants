import { useState, useEffect, useInsertionEffect } from "react";
import DETAILS_CARD from "./components/DETAILS_CARD";
import HEADER from "./components/HEADER";
import MAP from "./components/MAP";
import "./App.css";
import useShowdetails from "./store/ShowCardDetailStore";
import useCoordinateStore from "./store/coordinateStore";
import { getTheCurrentLocation } from "./utils/utils";
import useRestaurantsData from "./Api/useRestaurantsData";
import { useQuery } from "@tanstack/react-query";

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
        useInsertionEffect(() => {
                getTheCurrentLocation(setCoordinate, setBonds);
        }, []);
        
        //-> get the restaurant data
        //TODO? use the bounds to get the data
        const { isLoading, isError, isFetching, data, error, refetch } =
                useRestaurantsData(
                        11.847676,
                        12.838442,
                        109.095887,
                        109.149359,
                );
        useEffect(() => {
                refetch();
                console.log("data: ", data);
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
