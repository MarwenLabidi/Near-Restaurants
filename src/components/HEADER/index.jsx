import React from "react";
import usePlacesData from "../../Api/usePlacesData";
import AUTOCOMPLETE from "../AUTOCOMPLETE";
//import css module file
import {
        title,
        header,
        inputSection,
        inputTextField,
        buttonSubmit,
} from "./index.module.css";

const HEADER = () => {
        return (
                <header className={header}>
                        <h2 className={title}>NEAR RESTAURANTS</h2>
                        <div className={inputSection}>
                                <input
                                        className={inputTextField}
                                        type='text'
                                        placeholder='Search by City or Town'
                                        onKeyDown={(e) => {
                                                console.log(e.target.value);
                                                //FIXME? use formik in this input
                                                //FIXME? can only called in e body of component
                                                // const {data,error,isLoading}=usePlacesData()
                                                // console.log('data: ', data);
                                        }}
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
                        <AUTOCOMPLETE/>
                </header>
        );
};

export default HEADER;
