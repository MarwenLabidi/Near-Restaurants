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
//TODO? get the data from ref restaurat the you picked and  show them here 
const DETAILS_CARD = () => {
        return (
                <section className={card}>
                        <section className={cardSectionOne}>
                                <div className={cardName}>
                                        <h5 className={cardNameTitle}>Name</h5>
                                        <h3 className={cardNameContent}>lablebi</h3>
                                </div>
                                <div className={cardLocation}>
                                        <h5 className={cardLocationTitle}>
                                                Location
                                        </h5>
                                        <h3 className={cardLocationContent}>
                                                krib
                                        </h3>
                                </div>
                        </section>
                        <section className={cardSectionTwo}>
                                <div className={cardCuisine}>
                                        <h5 className={cardCuisineTitle}>
                                                cuisine
                                        </h5>
                                        <h3 className={cardCuisineContent}>
                                                Tunis
                                        </h3>
                                </div>
                                <div className={cardRating}>
                                        <h5 className={cardRatingTitle}>
                                                Rating
                                        </h5>
                                        <h3 className={cardRatingContent}>
                                                five 
                                        </h3>
                                </div>
                        </section>
                </section>
        );
};

export default DETAILS_CARD;
