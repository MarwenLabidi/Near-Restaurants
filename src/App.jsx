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
        //TODO? useEffect to get the restaurant whatevent the cooridnate and boundsstate change
        //TODO? use react query to fetch the restaurant data : use costom hook and look at dev tool use select and on succes an on error
        //TODO? delete the useEffect and use the useQuery hook
        const { isLoading, isError, isFetching, data, error, refetch } =
                useRestaurantsData(
                        11.847676,
                        12.838442,
                        109.095887,
                        109.149359
                );
        useEffect(() => {
                // console.log("data: ", data);
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
