import { useState, useEffect } from "react";
import {
        MapContainer,
        TileLayer,
        Popup,
        Marker,
        useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import L from "leaflet";
import icon from "/images/icon-location.svg";
import POPUP_CARD from "../POPUP_CARD";
import useCoordinateStore from "../../store/coordinateStore";
import { useMap } from "react-leaflet";

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
function MapClick({ setCoordinate, setBonds }) {
        const map = useMapEvent("click", (e) => {
                // map.flyTo(e.latlng, map.getZoom());
                let center=map.getCenter();
                setCoordinate(center.lat, center.lng );
                let bounds=map.getBounds();
                setBonds(bounds._northEast,bounds._southWest);
        });
        return null;
}
// handel change map drag event
function MapDrag({setCoordinate,setBonds}) {
        const map = useMapEvent("dragend", (e) => {
                let center=map.getCenter();
                setCoordinate(center.lat, center.lng );
                let bounds=map.getBounds();
                setBonds(bounds._northEast,bounds._southWest);
        });
        return null;
}
//change the center of the map
function ChangeView({ center, zoom ,setBonds}) {
        const map = useMap();
        map.setView(center, zoom);
        // set the bounds of the map from here inside useeffect
        useEffect(() => {
                let bounds=map.getBounds();
                setBonds(bounds._northEast,bounds._southWest);
        }, [center ]);
        return null;
}

const MAP = () => {
        const { coordinate, bounds, setCoordinate, setBonds } =
                useCoordinateStore((state) => ({
                        coordinate: state.coordinate,
                        bounds: state.bounds,
                        setCoordinate: state.setCoordinate,
                        setBonds: state.setBonds,
                }));
        const [zoom, setZoom] = useState(13);
        const [center, setCenter] = useState([36.8065, 10.1815]);
        useEffect(() => {
                setCenter([coordinate.lg, coordinate.wg]);
        }, [coordinate]);

        return (
                <MapContainer
                        center={center}
                        zoom={zoom}
                        scrollWheelZoom={false}>
                        <ChangeView center={center} zoom={zoom} setBonds={setBonds}/>

                        <MapClick setCoordinate={setCoordinate} setBonds={setBonds} />
                        <MapDrag  setCoordinate={setCoordinate} setBonds={setBonds}/>
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
