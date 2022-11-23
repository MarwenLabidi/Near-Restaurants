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

export const pickPlace = (e,placeInTheInputRef,addPlace) => {
        let place = e.target.getAttribute("data-places");
        place = JSON.parse(place);
        // set the place you clicked to placeInTheInputRef
        placeInTheInputRef.current = place;
        //set the the value of the target inside the input
        e.target.parentElement.parentElement.children[1].firstChild.value =
                place.display_name;
        //FIXME?create a state to hide and show the list of places or look forit i already exist
        // e.target.parentElement.style.display = "none";
        addPlace([]);
};
