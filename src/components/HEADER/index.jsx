import React from "react";
//import css module file
import { title,header,inputSection,inputTextField,buttonSubmit } from "./index.module.css";

const HEADER = () => {
        return (
                <header className={header}>
                        <h2 className={title}>NEAR RESTAURANTS</h2>
                        <div className={inputSection}>
                                <input className={inputTextField}
                                        type='text'
                                        placeholder='Search by City or Town'
                                />
                                <button className={buttonSubmit}>
                                        <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='11'
                                                height='14'>
                                                <path
                                                        fill='none'
                                                        stroke='#FFF'
                                                        strokeWidth='3'
                                                        d='M2 1l6 6-6 6'
                                                />
                                        </svg>
                                </button>
                        </div>
                </header>
        );
};

export default HEADER;
