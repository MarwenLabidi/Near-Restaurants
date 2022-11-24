const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c090de6304msh6874faabe5d64a2p1681aajsn5e91b8993a38',//FIXME? use env varriable here
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'//FIXME? use env varriable here
	}
};
//Query Parameters
/* note: tr=top right bl=bottom left
bl_latitude
tr_latitude
bl_longitude
tr_longitude
restaurant_tagcategory_standalone
restaurant_tagcategory
limit
currency
open_now
lunit
lang
*/


/** result
 * 
 * [{name,location_string,latitude,longitude,cuisine=[{name},{}],rating},{},{},{},{},{}]
 */

fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=11.847676&tr_latitude=12.838442&bl_longitude=109.095887&tr_longitude=109.149359&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));