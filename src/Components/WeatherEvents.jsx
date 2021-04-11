/**@format */

/** Displays simple cards with information about each weather event */

import htmlComponent from "../static_resources/event_cards/index.html";

const WeatherEvents = ({ data }) => {
  let weatherEvents = [];
  data.forEach((element) => {
    weatherEvents.push(
      <div>
        <ul>
          <li>Title: {element.title}</li>
          <li>
            {element.description !== null
              ? "No description is available"
              : element.description}
          </li>
          <li>Category: {element.category}</li>
        </ul>
        <br />
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
