import { useState } from "react";
import DETAILS_CARD from "./components/DETAILS_CARD";
import HEADER from "./components/HEADER";
import MAP from "./components/MAP";
import "./App.css";

function App() {
        //TODO? useeffect to set the current courdinate
        //TODO? useEffect to get the restaurant whatevent the cooridnate and boundsstate change
        return (
                <>
                        <HEADER />
                        <DETAILS_CARD />
                        <MAP />
                </>
        );
}

export default App;
//-[] create autocomple components(there is location icon and place name) 5 placess to choose from
//-[] create zustand store : showdetails :fale, coordinate :{lg,wg}, bounds : {ne: null, sw: null} place : []
//-[] fetch the places from the api [https://nominatim.openstreetmap.org/search?q=tunis&format=geojson] using custom hooks react query and set them to the place state or make her ref
//-[] create th useRestaurant data ustom hooks uing react query to get restaurant data
//-[] create geocoder with the input filed and us formik
//-[] create the direction feature
//-[] add rating starts from material ui 