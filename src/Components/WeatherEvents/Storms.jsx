/**@format */

import React from "react";
import _ from "underscore";
import EventCard from "../common/Eventcard";
import { Marker } from "@react-google-maps/api";
import Storm_icon from "../../static_resources/img/thunderstorms-fill.png";

/**
 * Unable to find a proper icon for this event yet so I've used a placeholder instead for the time being
 */

const Storms = ({ events, changeEventCard }) => {
  let storm_activity = _.where(events, { category: "Severe Storms" });

  storm_activity = storm_activity.map((location) => {
    return (
      <Marker
        icon={Storm_icon}
        position={{
          lat: location.coordinates.ltd,
          lng: location.coordinates.lng,
        }}
        key={location.id}
        onClick={() => {
          changeEventCard(
            <EventCard
              title={location.title}
              resetEvent={changeEventCard}
              position={{
                lat: location.coordinates.ltd,
                lng: location.coordinates.lng,
              }}
              eventType={location.category}
              date={location.date}
              source={location.source}
            ></EventCard>
          );
        }}
      />
    );
  });
  return <div className="Storm-Activity">{storm_activity}</div>;
};

export default Storms;
