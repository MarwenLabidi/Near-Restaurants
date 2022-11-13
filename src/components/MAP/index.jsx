import React from "react";
import { MapContainer, TileLayer, Popup, Marker,useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import L from "leaflet";
import icon from "/images/icon-location.svg";
import POPUP_CARD from "../POPUP_CARD";

let DefaultIcon = L.icon({
        iconUrl: icon,
        iconSize: [46, 56],
        // iconAnchor: [23, 56],
        // popupAnchor: [0, -56],
});

let arrCoordinates = [
        [36.8065, 10.1815],
        [36.8185, 10.1815],
        [36.8065, 10.1915],
];

function MultipleMarkers() {
        return arrCoordinates.map((coordinata, index) => {
                return (
                        <Marker
                                key={index}
                                position={coordinata}
                                icon={DefaultIcon}>
                                <Popup>
                                        <POPUP_CARD />
                                </Popup>
                        </Marker>
                );
        });
}
//handel click event
function MapClick() {
        const map = useMapEvent("click", (e) => {
                console.log(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
                console.log(map.getCenter());


        });
        return null;
}
// handel change map drag event
function MapDrag() {
        const map = useMapEvent("dragend", (e) => {
                // console.log(e);
                console.log(map.getCenter());
        });
        return null;
}


const MAP = () => {
        return (
                <MapContainer
                        center={[36.8065, 10.1815]}
                        zoom={13}
                        scrollWheelZoom={false}>
                        <MapClick />
                        <MapDrag />
                        <TileLayer
                                attribution='&copy; <a href="https://github.com/MarwenLabidi">by MarwenLabidi</a> '
                                url={`https://api.mapbox.com/styles/v1/abidimarwen/cla5hdzif000j14t37tq0lcc2/tiles/256/{z}/{x}/{y}@2x?access_token=${
                                        import.meta.env.VITE_MAP_key
                                }`}
                        />
                        <MultipleMarkers />
                </MapContainer>
        );
};

export default MAP;