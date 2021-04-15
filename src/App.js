/**@format */

import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/common/NavBar";
import WeatherForecast from "./Components/WeatherForecast";
import GlobalMap from "./Components/GlobalMap";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <WeatherForecast />
      </React.Fragment>
    );
  }
}

export default App;
