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
              <div class="property-image-title">
                <h5>Card Title</h5>
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
  });
  return (
    <div>
      <h1>Weather Events:</h1>
      <ul>{weatherEvents}</ul>
    </div>
  );
};

export default WeatherEvents;
