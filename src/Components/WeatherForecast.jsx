/**@format */

import React, { Component } from "react";
import WeatherEvents from "./WeatherEvents";
import httpService from "../services/httpService";

class WeatherForecast extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return <WeatherEvents data={this.state.events} />;
  }

  getEvents = async () => {
    const temp = await httpService.get(
      "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
    );
    let weatherEvents = [];

    temp.data.events.forEach((element) => {
      weatherEvents.push({
        title: element.title,
        description: element.description,
        category: element.categories[0].title,
      });
    });

    this.setState({ events: weatherEvents });
  };
}

export default WeatherForecast;
