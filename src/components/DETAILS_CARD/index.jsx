import React from "react";
import { card } from "./index.module.css";


const DETAILS_CARD = () => {
        return (
                <section className={card}>
                        <div>
                                <h5>Name</h5>
                                <h4>cha</h4>
                        </div>
                        <div>
                                <h5>Location</h5>
                                <h4>krib</h4>
                        </div>
                        <div>
                                <h5>cuisine</h5>
                                <h4>Tunis</h4>
                        </div>
                        <div>
                                <h5>Rating</h5>
                                <h4>five start</h4>
                        </div>
                </section>
        );
};

export default DETAILS_CARD;
