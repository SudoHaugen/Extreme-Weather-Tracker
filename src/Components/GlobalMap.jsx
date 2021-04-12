/**@format */

import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
//import Marker from "./Marker";
//import "../static_resources/maps/main.css";
import wildfire_icon from "../static_resources/img/wildfire_icon_resized.jpg";

const containerStyle = {
  width: "1400px",
  height: "600px",
};

const center = {
  lat: 0,
  lng: -119.417931,
};

const position = {
  lat: 39.857563414,
  lng: -119.417931,
};

function GlobalMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker icon={wildfire_icon} position={position} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GlobalMap);
