/**@format */

import React from "react";
import { Marker } from "@react-google-maps/api";
import _ from "underscore";
import storms_icon from "../../static_resources/img/thunderstorms-fill.png";

const Storms = ({ events }) => {
  let severe_storms = _.where(events, { category: "Severe Storms" });

  severe_storms = severe_storms.map((location) => {
    return (
      <Marker
        icon={storms_icon}
        position={{
          lat: location.coordinates.ltd,
          lng: location.coordinates.lng,
        }}
        key={location.id}
      />
    );
  });
  return <div className="Severe-Storms">{severe_storms}</div>;
};

export default Storms;
