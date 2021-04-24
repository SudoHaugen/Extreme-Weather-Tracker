/**@format */

import React from "react";
import { Marker } from "@react-google-maps/api";
import _ from "underscore";
import wildfire_icon from "../../static_resources/img/fire-fill.png";
import WildfireCard from "./WildfireCard";

const Wildfire = ({ events }) => {
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
      />
    );
  });
  return <div className="Wildfires">{wildfires}</div>;
};

export default Wildfire;