// create zustand store
import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const coordiateStore = (set) => ({
        coordinate: { lg: null, wg: null },
        bounds: { ne: null, sw: null },

        setCoordinate: (lg, wg) => {
                set((state) => ({
                        coordinate: { lg, wg },
                }));
        },

        setBonds: (ne, sw) => {
                set((state) => ({
                        bounds: { ne, sw },
                }));
        },
});

const useCoordinateStore = create(
        devtools(
                persist(coordiateStore, {
                        name: "coordinate",
                })
        )
);

export default useCoordinateStore;


