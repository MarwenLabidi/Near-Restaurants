import React from "react";
import {
        popupCardSection,
        restaurantName,
        showDetailsButton,
        directionButton,
} from "./index.module.css";

const POPUP_CARD = ({data}) => {
        //TODO? pass the data to the tags
        return (
                <>
                        <section className={popupCardSection}>
                                <div>
                                        <h2 className={restaurantName}>
                                                restaurant Name
                                        </h2>
                                        <button className={directionButton}>
                                                direction
                                        </button>
                                        //TODO? create onlick event and pass the restaurant that you pick to the the picked ref restaurant in app compnents 
                                        <button className={showDetailsButton}>
                                                show details
                                        </button>
                                </div>
                        </section>
                </>
        );
};

export default POPUP_CARD;

//FIXME? delee those
// cuisine
// latitude
// location_string
// longitude
// name
// rating