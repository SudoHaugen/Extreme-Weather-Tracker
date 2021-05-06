/**@format */

import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";
import _ from "underscore";
import wildfire_icon from "../../static_resources/img/fire-fill.png";
import WildfireCard from "./WildfireCard";
import EventCard from "../common/Eventcard";

const Wildfire = ({ events }) => {
  const [eventcardVisible, setVisibility] = useState(false);
  let wildfires = _.where(events, { category: "Wildfires" });

  wildfires = wildfires.map((location) => {
    return (
      <Marker
        icon={wildfire_icon}
        position={{
          lat: location.coordinates.ltd,
          lng: location.coordinates.lng,
        }}
        key={location.id}
        onClick={() => {
          setVisibility(!eventcardVisible);
        }}
      />
    );
  });
  return (
    <div className="Wildfires">
      {eventcardVisible === false ? (
        wildfires
      ) : (
        <div className="markerWrapper">
          {wildfires}
          <EventCard />
        </div>
      )}
    </div>
  );
};

export default Wildfire;
