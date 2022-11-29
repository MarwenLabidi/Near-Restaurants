// create zustand store
import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const showdetailsStore = (set) => ({
        showdetails: false,
        toggleShowdetails: () => {
                set((state) => ({
                        showdetails: true,
                }));
        },
});

const useShowdetails = create(
        // devtools(
                showdetailsStore, {
                        name: "showdetails",
                }
        // )
);

export default useShowdetails;
