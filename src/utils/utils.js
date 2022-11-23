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

export const pickPlace = (e, placeInTheInputRef, addPlace) => {
        let place = e.target.getAttribute("data-places");
        place = JSON.parse(place);
        // set the place you clicked to placeInTheInputRef
        placeInTheInputRef.current = place;
        //set the the value of the target inside the input
        e.target.parentElement.parentElement.children[1].firstChild.value =
                place.display_name;
        //hide the autocomplete
        addPlace([]);
};

export const getTheCurrentLocation = async (setCoordinate) => {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                        showPosition,
                        showError
                );

                function showPosition(position) {
                        setCoordinate(position.coords.latitude, position.coords.longitude)
                }
                function showError(error) {
                        switch (error.code) {
                                case error.PERMISSION_DENIED:
                                        console.error(
                                                "User denied the request for Geolocation."
                                        );
                                        break;
                                case error.POSITION_UNAVAILABLE:
                                        console.error(
                                                "Location information is unavailable."
                                        );
                                        break;
                                case error.TIMEOUT:
                                        console.error(
                                                "The request to get user location timed out."
                                        );
                                        break;
                                case error.UNKNOWN_ERROR:
                                        console.error(
                                                "An unknown error occurred."
                                        );
                                        break;
                        }
                }
        } else {
                alert("Geolocation is not supported by this browser.");
        }
};
