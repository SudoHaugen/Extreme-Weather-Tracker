/**@format */

const WeatherEvents = ({ data }) => {
  let weatherEvents = [];
  data.forEach((element) => {
    weatherEvents.push(
      <div>
        <ul>
          <li>Title: {element.title}</li>
          <li>
            {element.description !== null
              ? "No description was given"
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
