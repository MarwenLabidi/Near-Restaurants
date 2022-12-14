// create zustand store
import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const coordiateStore = (set) => ({
        coordinate: { lg: 12.492507, wg: 12.492507 },
        bounds: { ne: null, sw: null },

        setCoordinate: (lg, wg) => {
                set((state) => ({
                        coordinate: { lg, wg },
                }));
        },

        setBonds: (ne, sw) => {
                set((state) => ({
                        bounds: [ ne, sw ],
                }));
        },
});

const useCoordinateStore = create(
        devtools(
                coordiateStore, {
                        name: "coordinate",
                }
        )
);

export default useCoordinateStore;


