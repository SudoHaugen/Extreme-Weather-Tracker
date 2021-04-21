/**@format */

import React, { Component } from "react";
import WeatherEvents from "./WeatherEvents";
import httpService from "../services/httpService";
import GlobalMap from "./GlobalMap";

class WeatherForecast extends Component {
  state = {
    events: {},
  };

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return <GlobalMap data={this.state.events} />;
  }

  getEvents = async () => {
    const temp = await httpService.get(
      "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
    );
    let weatherEvents = [];

    temp.data.events.forEach((element) => {
      weatherEvents.push({
        id: element.id,
        title: element.title,
        description: element.description,
        category: element.categories[0].title,
        coordinates: {
          lng: element.geometries[0].coordinates[0],
          ltd: element.geometries[0].coordinates[1],
        },
      });
    });

    this.setState({ events: weatherEvents });
  };
}

export default WeatherForecast;
