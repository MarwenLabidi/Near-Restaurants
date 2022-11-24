import { useCallback, useEffect, useRef } from "react";
import fetchPlaces from "../../Api/usePlacesData";
import { debounce } from "../../utils/utils";
import AUTOCOMPLETE from "../AUTOCOMPLETE";
import { useForm } from "react-hook-form";
//import css module file
import {
        title,
        header,
        inputSection,
        inputTextField,
        buttonSubmit,
} from "./index.module.css";
import usePlaceStore from "../../store/placeStore";
import useCoordinateStore from "../../store/coordinateStore";

const HEADER = () => {
        const { register } = useForm();
        const { addPlace } = usePlaceStore((state) => ({
                addPlace: state.addPlace,
        }));
        const handelDebounce = useCallback(debounce(fetchPlaces, addPlace));
        const placeInTheInputRef = useRef(null);
        const { setCoordinate, setBonds } = useCoordinateStore((state) => ({
                setCoordinate: state.setCoordinate,
                setBonds: state.setBonds,
        }));
        useEffect(() => {
                addPlace([]);
        }, []);

        return (
                <header className={header}>
                        <h2 className={title}>NEAR RESTAURANTS</h2>
                        <div className={inputSection}>
                                <input
                                        {...register("search")}
                                        className={inputTextField}
                                        type='text'
                                        placeholder='Search by City or Town'
                                        onInput={async (e) => {
                                                let value =
                                                e.target.value.toLowerCase();
                                                handelDebounce(value);
                                        }}
                                />
                                <button
                                        className={buttonSubmit}
                                        onClick={(e) => {
                                                if (
                                                        !placeInTheInputRef.current
                                                ) {
                                                        alert(`this please doesn't exst please pick one from the suggestions`);
                                                        return;
                                                }
                                                //set the coordinate to the state
                                                setCoordinate(
                                                        placeInTheInputRef
                                                                .current.lat,
                                                        placeInTheInputRef
                                                                .current.lon
                                                );
                                                //FIXME? set the bounds too
                                        }}>
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
                        <AUTOCOMPLETE placeInTheInputRef={placeInTheInputRef} />
                </header>
        );
};

export default HEADER;
