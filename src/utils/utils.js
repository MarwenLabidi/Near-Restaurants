export function debounce(cb, addPlace, delay = 1000) {
        let timeout;

        return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(async () => {
                        let data = await cb(...args);
                        // console.log("real data: ", data);
                        //add this data to the place state in zustand
                        addPlace(data);
                }, delay);
        };
}
