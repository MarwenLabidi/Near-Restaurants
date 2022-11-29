import React from "react";
import {
        card,
        cardSectionOne,
        cardSectionTwo,
        cardName,
        cardNameTitle,
        cardNameContent,
        cardLocation,
        cardLocationTitle,
        cardLocationContent,
        cardCuisine,
        cardCuisineTitle,
        cardCuisineContent,
        cardRating,
        cardRatingTitle,
        cardRatingContent,
} from "./index.module.css";
const DETAILS_CARD = ({ chosenRestaurant }) => {
        return (
                <section className={card}>
                        <section className={cardSectionOne}>
                                <div className={cardName}>
                                        <h5 className={cardNameTitle}>Name</h5>
                                        <h3 className={cardNameContent}>
                                                {chosenRestaurant.name}
                                        </h3>
                                </div>
                                <div className={cardLocation}>
                                        <h5 className={cardLocationTitle}>
                                                Location
                                        </h5>
                                        <h3 className={cardLocationContent}>
                                                {
                                                        chosenRestaurant.location_string
                                                }
                                        </h3>
                                </div>
                        </section>
                        <section className={cardSectionTwo}>
                                <div className={cardCuisine}>
                                        <h5 className={cardCuisineTitle}>
                                                cuisine
                                        </h5>
                                        <h3 className={cardCuisineContent}>
                                               {chosenRestaurant.cuisine[0]}
                                                
                                        </h3>
                                </div>
                                <div className={cardRating}>
                                        <h5 className={cardRatingTitle}>
                                                Rating
                                        </h5>
                                        <h3 className={cardRatingContent}>
                                                {chosenRestaurant.rating
                                                        ? chosenRestaurant.rating
                                                        : "no rating"}
                                        </h3>
                                </div>
                        </section>
                </section>
        );
};

export default DETAILS_CARD;


