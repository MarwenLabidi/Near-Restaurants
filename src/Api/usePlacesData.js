// import { useQuery } from "@tanstack/react-query";
// create a url from https://nominatim.openstreetmap.org/search?q=tunis&format=geojson
const createUrl = (query) => {
	const baseUrl = "https://nominatim.openstreetmap.org/search";
	const params = new URLSearchParams({
		q: query,
		format: "geojson",
	});
	return `${baseUrl}?${params}`;
};
// fetch function 
const fetchPlaces = async (query) => {
	const url = createUrl(query);
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	const data = await response.json();
	const { features } = data;
	const places = features.map((feature) => {
		const { properties, bbox, geometry } = feature;
		const { display_name } = properties;
		const [lon, lat] = geometry.coordinates;
		return {
			display_name,
			bbox,
			lat,
			lon,
		};
	});
	return places;

};
export default fetchPlaces;
//FIXME? use debounce  function here


