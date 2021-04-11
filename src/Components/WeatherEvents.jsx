/**@format */

/** Displays simple cards with information about each weather event */

import "../static_resources/event_cards/main.css";

const WeatherEvents = ({ data }) => {
  let weatherEvents = [];
  data.forEach((element) => {
    weatherEvents.push(
      <div class="center">
        <div class="property-card">
          <a href="#">
            <div class="property-image">
              <div class="property-image-title"></div>
            </div>
          </a>
          <div class="property-description">
            <h5> {element.category} </h5>
            <p>
              {element.title === ""
                ? "No discription available"
                : element.title}
            </p>
            <p>
              {element.description === ""
                ? "No discription available"
                : element.description}
            </p>
          </div>
          <a href="#">
            <div class="property-social-icons"></div>
          </a>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>Weather Events:</h1>
      <ul>{weatherEvents}</ul>
    </div>
  );
};

export default WeatherEvents;
