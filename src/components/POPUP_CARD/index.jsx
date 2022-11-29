import React from "react";
import useShowdetails from "../../store/ShowCardDetailStore";
import {
        popupCardSection,
        restaurantName,
        showDetailsButton,
        directionButton,
} from "./index.module.css";

const POPUP_CARD = ({
        name,
        location_string,
        cuisine,
        rating,
        setChosenRestaurant,
}) => {
        const { toggleShowdetails } = useShowdetails((state) => ({
                toggleShowdetails: state.toggleShowdetails,
        }));
        return (
                <>
                        <section className={popupCardSection}>
                                <div>
                                        <h2 className={restaurantName}>
                                                {name}
                                        </h2>
                                        <button
                                                className={showDetailsButton}
                                                onClick={() => {
                                                        console.log(
                                                                "you clicked on the button"
                                                        );
                                                        setChosenRestaurant({
                                                                name,
                                                                location_string,
                                                                cuisine,
                                                                rating,
                                                        });
                                                        toggleShowdetails();
                                                }}>
                                                show details
                                        </button>
                                </div>
                        </section>
                </>
        );
};

export default POPUP_CARD;
