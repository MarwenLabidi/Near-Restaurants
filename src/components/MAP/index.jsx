import React from "react";
import { MapContainer, TileLayer,Popup,Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css"

const MAP = () => {
        return (
                <MapContainer
                        center={[36.8065, 10.1815]}
                        zoom={13}
                        scrollWheelZoom={false}>
                        <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url='https://api.mapbox.com/styles/v1/abidimarwen/cla5hdzif000j14t37tq0lcc2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWJpZGltYXJ3ZW4iLCJhIjoiY2xhNWhqNGVwMGl1MTNwcWtnemY1ZWp6cCJ9.ECULKyYrTHQKtp_l4Z_WkA'
                        />
                        <Marker position={[36.8065, 10.1815]}>
                                <Popup>
                                        A pretty CSS3 popup. <br /> Easily
                                        customizable.
                                </Popup>
                        </Marker>
                </MapContainer>
        );
};

export default MAP;

//change marker icon
import L from "leaflet";
import icon from "/images/icon-location.svg";
let DefaultIcon = L.icon({
        iconUrl: icon,
	iconSize: [46, 56],
});
L.Marker.prototype.options.icon = DefaultIcon;