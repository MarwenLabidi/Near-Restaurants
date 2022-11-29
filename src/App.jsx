import { useState,  useInsertionEffect } from "react";
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
        const [chosenRestaurant,setChosenRestaurant] = useState(null);
        // set the current location to the state
        useInsertionEffect(() => {
                getTheCurrentLocation(setCoordinate, setBonds);
        }, []);

        return (
                <>
                        <HEADER />
                        {showdetails && <DETAILS_CARD chosenRestaurant={chosenRestaurant} />}
                        <MAP setChosenRestaurant={setChosenRestaurant} />
                </>
        );
}

export default App;
