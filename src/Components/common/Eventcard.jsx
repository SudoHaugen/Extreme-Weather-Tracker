/**@format */

import React from "react";
import { OverlayView } from "@react-google-maps/api";

import "../../static_resources/event_cards/main.css";

const Eventcard = ({
  title,
  resetEvent,
  position,
  eventType,
  date,
  source,
}) => {
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
            <div className={`property-image ${eventType}`}></div>
          </a>
          <div className="property-description">
            <h5 style={{ padding: "5px 0px 10px" }}>{title}</h5>
            <p>Incident type: {eventType ? eventType : "Not available"}</p>
            <p>
              Date registered: <br />
              {date ? date : "Not available"}
            </p>
            <p>Source: {source ? source : "Not available"}</p>
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
