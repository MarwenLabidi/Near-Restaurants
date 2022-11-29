import React from "react";
import usePlaceStore from "../../store/placeStore";
import { pickPlace } from "../../utils/utils";
import { autoComplete, suggestionPlace } from "./index.module.css";

const AUTOCOMPLETE = ({ placeInTheInputRef }) => {
        const { places, addPlace } = usePlaceStore((state) => ({
                places: state.places,
                addPlace: state.addPlace,
        }));

        return (
                <div className={autoComplete} role='listitem'  >
                        {places.map((place, index) =>
                                //stop if its more than 5
                                index > 4 ? null : (
                                        <p tabIndex={`0`}
                                                data-places={JSON.stringify(
                                                        place
                                                )}
                                                className={suggestionPlace}
                                                key={place.lat}
                                                onClick={(e) => {
                                                        pickPlace(
                                                                e,
                                                                placeInTheInputRef,
                                                                addPlace
                                                        );
                                                }}>
                                                {place.display_name}
                                        </p>
                                )
                        )}
                </div>
        );
};

export default AUTOCOMPLETE;
