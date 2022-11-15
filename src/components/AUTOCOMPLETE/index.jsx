import React from "react";
import{ autoComplete,suggestionPlace } from "./index.module.css";

const AUTOCOMPLETE = () => {
        return (
                <div className={autoComplete} role="list">
                        <p className={suggestionPlace}>place n1</p>
                        <p className={suggestionPlace}>place n2</p>
                        <p className={suggestionPlace}>place n3</p>
                        <p className={suggestionPlace}>place n4</p>
                        <p className={suggestionPlace}>place n5</p>
                </div>
        );
};

export default AUTOCOMPLETE;
