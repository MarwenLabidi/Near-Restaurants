import React from "react";
import {
        popupCardSection,
        restaurantName,
        showDetailsButton,
        directionButton,
} from "./index.module.css";

const POPUP_CARD = () => {
        return (
                <>
                        <section className={popupCardSection}>
                                <div>
                                        <h3 className={restaurantName}>
                                                restaurant Name
                                        </h3>
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
