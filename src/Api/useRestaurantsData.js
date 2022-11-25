const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':import.meta.env.VITE_X-RapidAPI-Key,
		'X-RapidAPI-Host': import.meta.env.VITE_X-RapidAPI-Host,
	}
};
//FIXME? delete them
let bl_latitude=11.847676;
let tr_latitude=12.838442;
let bl_longitude=109.095887;
let tr_longitude=109.149359;

const fetchRestaurants = async (bl_latitude,tr_latitude,bl_longitude,tr_longitude) => {
const response=await fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${bl_latitude}&tr_latitude=${tr_latitude}&bl_longitude=${bl_longitude}&tr_longitude=${tr_longitude}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`, options).catch((error) => {console.log('fetch error line 15 in useRestaurantsData.js: ', error);});
const data=await response.json();
return data;
}

//TODO? look how to add params to the fetch function inside use query
// create a custom hook to get the restaurats data
const useRestaurantsData = () => {
	return  useQuery("restaurants", fetchRestaurants,{
		// enabled: false,
		onSuccess: (data) => {console.log(`success: ${data}`)},
		onError: (error) => {console.log(`error: ${error}`)},
		// select: (data) => {return data;},
	});
	
}

/** result
 * 
 * [{name,location_string,latitude,longitude,cuisine=[{name},{}],rating},{},{},{},{},{}]
 */