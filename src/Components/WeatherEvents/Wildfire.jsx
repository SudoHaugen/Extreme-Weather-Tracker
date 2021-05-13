/**@format */

import React from "react";
import _ from "underscore";
import EventCard from "../common/Eventcard";
import { Marker } from "@react-google-maps/api";
import Wildfire_icon from "../../static_resources/img/fire-fill.png";

const Wildfire = ({ events, changeEventCard }) => {
  let wildfires = _.where(events, { category: "Wildfires" });

  wildfires = wildfires.map((location) => {
    return (
      <Marker
        icon={Wildfire_icon}
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
  return <div className="Wildfires">{wildfires}</div>;
};

export default Wildfire;
