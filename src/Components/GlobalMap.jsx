/**@format */

import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Wildfire from "./WeatherEvents/Wildfire";
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

const GlobalMap = ({ data }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBwWMrTWTKZppuxQyA6xXZZzZ6C1HYMaw",
  });
  const [map, setMap] = React.useState(null);
  const [events, setEvents] = React.useState(data);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
    setEvents(data);
  }, []);

  useEffect(() => {
    if (data !== events) setEvents(data);
  });

  //if (data !== JSON.stringify({}) ) setEvents(data);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: center.lat, lng: center.lng }}
      zoom={3}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/*Render all wildfires on Google Maps*/}
      <Wildfire events={events} onLoad={onLoad} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(GlobalMap);
