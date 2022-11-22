import create from "zustand";

import { devtools,persist } from "zustand/middleware";

const placeStore = (set) => ({
        places: [],
        addPlace: (place) => {
                set((state) => ({
                        places: [...place],
                }));
        },
        removePlace: (placeId) => {
                set((state) => ({
                        places: state.places.filter((c) => c.id !== placeId),
                }));
        },
});

const usePlaceStore = create(
        // devtools(
                persist(placeStore, {
                        name: "placeStore",
                })
        // )       
         // devtools is a middleware
);

export default usePlaceStore;

//FIXME? delete the persist from all the stores look on internet