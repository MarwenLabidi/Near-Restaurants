import React from "react";
import usePlaceStore from "../../store/placeStore";
import { autoComplete, suggestionPlace } from "./index.module.css";

const AUTOCOMPLETE = () => {
        const { places } = usePlaceStore((state) => ({
                places: state.places,
        }));
        return (
                <div className={autoComplete} role='list'>
                        {places.map((place, index) =>
                                //stop if its more than 5
                                index > 4 ? null : (
                                        <p
                                                data-places={place}
                                                className={suggestionPlace}
                                                key={place.lat}
                                                onClick={(e) => {
                                                        console.log(e);
                                                        // TODO?
                                                }}>
                                                {place.display_name}
                                        </p>
                                )
                        )}
                </div>
        );
};

export default AUTOCOMPLETE;
//TODO? add click event to the p and close the autocomplete and add the name to the input and set the data in the coordinate store
