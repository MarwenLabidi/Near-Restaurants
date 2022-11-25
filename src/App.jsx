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
        const { isLoading, isError, isFetching, data, error, refetch } =
                useRestaurantsData(
                        bounds[1]?.lat,
                        bounds[0]?.lat,
                        bounds[1]?.lng,
                        bounds[0]?.lng,
                );
        useEffect(() => {
                refetch();
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
