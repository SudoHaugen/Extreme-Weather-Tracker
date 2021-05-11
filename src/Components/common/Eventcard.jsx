/**@format */

import React from "react";
import { OverlayView } from "@react-google-maps/api";

import "../../static_resources/event_cards/main.css";

const Eventcard = ({ title, resetEvent, position }) => {
  return (
    <OverlayView position={position} mapPaneName={"overlayMouseTarget"}>
      <div
        className="center"
        onClick={() => {
          resetEvent(null);
        }}
      >
        <div className="property-card">
          <a href="#">
            <div className="property-image"></div>
          </a>
          <div className="property-description">
            <h5>{title}</h5>
            <p>
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </p>
          </div>
          <a href="#">
            <div className="property-social-icons"></div>
          </a>
        </div>
      </div>
    </OverlayView>
  );
};
export default Eventcard;
