/**@format */

import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import wildfire_icon from "../static_resources/img/fire-fill.png";
import "../static_resources/maps/main.css";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 39.113014,
  lng: -105.358887,
};

const position = {
  lat: 39.113014,
  lng: -119.417931,
};

function getWildfires(events) {
  let wildFireEvents = [];

  events.forEach((element) => {
    if (element.category === "Wildfires") {
      console.log(element.coordinates);
      wildFireEvents.push(
        <Marker
          icon={wildfire_icon}
          position={{
            lat: element.coordinates.ltd,
            lng: element.coordinates.lng,
          }}
        />
      );
    }
  });

  return wildFireEvents;
}

const GlobalMap = (props) => {
  const { data } = props;
  const wildFires = getWildfires(data);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBwWMrTWTKZppuxQyA6xXZZzZ6C1HYMaw",
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
      {wildFires}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(GlobalMap);
