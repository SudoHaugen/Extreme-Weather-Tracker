/**@format */

import React from "react";
import _ from "underscore";
import EventCard from "../common/Eventcard";
import { Marker } from "@react-google-maps/api";
import Volcano_icon from "../../static_resources/img/meteor-fill.png";

/**
 * Unable to find a proper icon for this event yet so I've used a placeholder instead for the time being
 */

const Volcanic_Activity = ({ events, changeEventCard }) => {
  let volcanic_activity = _.where(events, { category: "Volcanoes" });

  volcanic_activity = volcanic_activity.map((location) => {
    return (
      <Marker
        icon={Volcano_icon}
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
  return <div className="Volcanic-Activity">{volcanic_activity}</div>;
};

export default Volcanic_Activity;
