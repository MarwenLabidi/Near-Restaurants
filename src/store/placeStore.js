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
                placeStore, {
                        name: "placeStore",
                }
        // )       
         // devtools is a middleware
);

export default usePlaceStore;

