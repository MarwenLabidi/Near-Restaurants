import { useQuery } from "@tanstack/react-query";

const options = {
        method: "GET",
        headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_XRapidAPIKey,
                "X-RapidAPI-Host": import.meta.env.VITE_XRapidAPIHost,
        },
};

const fetchRestaurants = async ({ queryKey }) => {
        const [key, bl_latitude, tr_latitude, bl_longitude, tr_longitude] =
                queryKey;
        const response = await fetch(
                `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${bl_latitude}&tr_latitude=${tr_latitude}&bl_longitude=${bl_longitude}&tr_longitude=${tr_longitude}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`,
                options
        ).catch((error) => {
                console.log(
                        "fetch error line 15 in useRestaurantsData.js: ",
                        error
                );
        });
        const data = await response.json();
        return data.data;
};

//TODO? look how to add params to the fetch function inside use query
// create a custom hook to get the restaurats data
const useRestaurantsData = (
        bl_latitude,
        tr_latitude,
        bl_longitude,
        tr_longitude
) => {
        return useQuery(
                [
                        "restaurants",
                        bl_latitude,
                        tr_latitude,
                        bl_longitude,
                        tr_longitude,
                ],
                fetchRestaurants,
                {
                        // enabled: false,
                        onSuccess: (data) => {
                                console.log(`success: ${data}`);
                        },
                        onError: (error) => {
                                console.log(`error: ${error}`);
                        },
                        // select: (data) => {return data;},
                }
        );
};

export default useRestaurantsData;
/** result
 *
 * [{name,location_string,latitude,longitude,cuisine=[{name},{}],rating},{},{},{},{},{}]
 */
