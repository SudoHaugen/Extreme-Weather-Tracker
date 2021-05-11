/**@format */

import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import NavBar from "./common/NavBar";
import Loader from "react-loader";

//Weather events
import Wildfire from "./WeatherEvents/Wildfire";
import Storms from "./WeatherEvents/Storms";
import Volcanic_activity from "./WeatherEvents/VolcanicActivity";

//Static resources
//import "../static_resources/maps/main.css";

const containerStyle = {
  width: "100%",
  height: "100vh",
  zIndex: 1,
  position: "relative",
};

let center = {
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
    libraries: ["places"],
  });
  const [map, setMap] = useState(null);
  const [events, setEvents] = useState(data);
  /**
   * When the user click on a marker on the map, a card will appear with details about the event.
   * This card is global meaning that only one (or none) card will be shown at any time
   */
  const [currentEventCard, setcurrentEventCard] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
    setEvents(data);
  }, []);

  //This allows each child components to display an event card where the marker is.
  //Sets new center position for the map while event card is being displayed
  /**
   * @param {EventCard} eventCard - A small card to be displayed on the map containing details of the event taking place
   * */
  const setNewEventCard = (eventCard) => {
    if (eventCard !== null) {
      center = eventCard.props.position;
      setcurrentEventCard(eventCard);
    } else {
      setcurrentEventCard(null);
    }
  };

  useEffect(() => {
    if (currentEventCard !== null) center = currentEventCard.props.position;
    if (data !== events) setEvents(data);
  });

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <React.Fragment>
      <NavBar />
      <Loader loaded={isLoaded}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: center.lat, lng: center.lng }}
          zoom={4}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {/*Render all wildfires on Google Maps*/}
          <Wildfire
            events={events}
            changeEventCard={setNewEventCard}
            eventCard={currentEventCard}
          />
          <Storms events={events} />
          <Volcanic_activity events={events} />
          {currentEventCard}
        </GoogleMap>
      </Loader>
    </React.Fragment>
  ) : (
    <></>
  );
};

export default React.memo(GlobalMap);
