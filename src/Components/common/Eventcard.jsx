/**@format */

import React from "react";
import "../../static_resources/event_cards/main.css";

const Eventcard = ({ title }) => {
  return (
    <div class="center">
      <div class="property-card">
        <a href="#">
          <div class="property-image">
            <div class="property-image-title">
              <h5>{title}</h5>
            </div>
          </div>
        </a>
        <div class="property-description">
          <h5> Card Title </h5>
          <p>
            Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
            Bingo. Lorem Ipum doth be hard.
          </p>
        </div>
        <a href="#">
          <div class="property-social-icons"></div>
        </a>
      </div>
    </div>
  );
};

export default Eventcard;
