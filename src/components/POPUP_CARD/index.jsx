import React from "react";
import {
        popupCardSection,
        restaurantName,
        showDetailsButton,
        directionButton,
} from "./index.module.css";

const POPUP_CARD = ({ name,location_string,cuisine,rating }) => {
        //TODO? pass all the data of props to the ref in the app components : create a ref there of the restaurants that you pick
        //TODO? change the state of show details :// chang it again when you focus in the inpute
        return (
                <>
                        <section className={popupCardSection}>
                                <div>
                                        <h2 className={restaurantName}>
                                                {name}
                                        </h2>
                                        <button className={directionButton}>
                                                direction
                                        </button>
                                        <button className={showDetailsButton}>
                                                show details
                                        </button>
                                </div>
                        </section>
                </>
        );
};

export default POPUP_CARD;
