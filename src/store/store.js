// create zustand store
import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const showdetailsStore = (set) => ({
        showdetails: false,
        toggleShowdetails: () => {
                set((state) => ({
                        showdetails: !state.showdetails,
                }));
        },
});

const useShowdetails = create(
        devtools(
                persist(showdetailsStore, {
                        name: "showdetails",
                })
        )
);

export default useShowdetails;
