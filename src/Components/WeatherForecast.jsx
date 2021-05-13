/**@format */

import React, { Component } from "react";
import httpService from "../services/httpService";
import GlobalMap from "./GlobalMap";
import axios from "axios";

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
    let weatherEvents = [];
    try {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      const temp = await httpService.get(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events",
        { cancelToken: source.token }
      );

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
          date: element.geometries[0].date.substring(0, 10),
          source: element.sources[0].url,
        });
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.log(error.message);
      }
    }

    this.setState({ events: weatherEvents });
  };
}

export default WeatherForecast;
