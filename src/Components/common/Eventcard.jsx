/**@format */

import { React, useState } from "react";
import { OverlayView } from "@react-google-maps/api";
import { init } from "../../services/urlShortner.ts";

import "../../static_resources/event_cards/main.css";

const Eventcard = ({
  title,
  resetEvent,
  position,
  eventType,
  date,
  source,
}) => {
  const [weather_source, setWeather_Source] = useState("");
  const resolveBitly = async (src) => {
    try {
      let result = await init(src);
      setWeather_Source(result.id);
    } catch (error) {
      console.log(error.error);
    }
  };
  resolveBitly(source);

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
            <p>Source: {source ? <a href={`https://www.${weather_source}`} target={"_blank"} rel={"noreferrer noopener"}>{weather_source}</a> : "Not available"}</p>
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
