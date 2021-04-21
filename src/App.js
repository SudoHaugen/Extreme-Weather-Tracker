/**@format */

import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/common/NavBar";
import WeatherForecast from "./Components/WeatherForecast";

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
