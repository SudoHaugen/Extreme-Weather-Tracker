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

const libraries = ["places"];

const GlobalMap = ({ data }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBwWMrTWTKZppuxQyA6xXZZzZ6C1HYMaw",
    libraries,
  });
  const [map, setMap] = useState(null);
  const [events, setEvents] = useState(data);
  /**
   * When the user click on a marker on the map, a card will appear with details about the event.
   * This card is global meaning that only one (or none) card will be shown at any time
   */
  const [currentEventCard, setcurrentEventCard] = useState(null);
  const [centerLocation, setCenterLocation] = useState(null);
  const [zoomLevel, setzoomLevel] = useState(4);

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
      //center = eventCard.props.position; Uncomment if users view should autofocus to where event card is being displayed
      setcurrentEventCard(eventCard);
    } else {
      setcurrentEventCard(null);
    }
  };

  //Function which will re-center the map according to the search result from the searchbox area
  /**
   * @param pos - A geolocation which represents the users desired location
   * */

  const searchForCenterLocation = (pos) => {
    if (pos === null || pos === undefined) {
      setCenterLocation(center);
      setzoomLevel(4);
    } else {
      setCenterLocation(pos);
      setzoomLevel(9);
    }
  };

  useEffect(() => {
    if (data !== events) setEvents(data);
  });

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <React.Fragment>
      <NavBar setCenterLocation={searchForCenterLocation} />
      <Loader loaded={isLoaded}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={!centerLocation ? center : centerLocation}
          zoom={zoomLevel}
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
          <Storms
            events={events}
            changeEventCard={setNewEventCard}
            eventCard={currentEventCard}
          />
          <Volcanic_activity
            events={events}
            changeEventCard={setNewEventCard}
            eventCard={currentEventCard}
          />

          {currentEventCard}
        </GoogleMap>
      </Loader>
    </React.Fragment>
  ) : (
    <></>
  );
};

export default React.memo(GlobalMap);
