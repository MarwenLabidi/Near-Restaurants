import { useQuery } from "@tanstack/react-query";
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
	return response.json();
};
// usePlacesData hook
const usePlacesData = (query) => {
	//FIXME? use debounce  function here
	const { data, error, isLoading } = useQuery(["places", query], () =>
		fetchPlaces(query)
	);
	return { data, error, isLoading };
};
export default usePlacesData;


