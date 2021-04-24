/**@format */

import "./App.css";
import React, { Component } from "react";
import WeatherForecast from "./Components/WeatherForecast";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <WeatherForecast />
      </React.Fragment>
    );
  }
}

export default App;
