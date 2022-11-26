import React from "react";
import {
        popupCardSection,
        restaurantName,
        showDetailsButton,
        directionButton,
} from "./index.module.css";

const POPUP_CARD = ({data}) => {
        if(!data){return}
        //FIXME? why data is undefiend
        console.log('data: ', data.name);
        //TODO? create onlick event and pass the restaurant that you pick to the the picked ref restaurant in app compnents 
        return (
                <>
                        <section className={popupCardSection}>
                                <div>
                                        <h2 className={restaurantName}>
                                               name: {data.name}
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

//FIXME? delee those
// cuisine
// latitude
// location_string
// longitude
// name
// rating