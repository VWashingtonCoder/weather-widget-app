import React from "react";
import DayCard from "./DayCard";
import DegreeToggle from "./DegreeToggle";
import { WEATHER_API, WEATHER_URL } from "../constants";

class ForecastContainer extends React.Component {
  async componentDidMount() {
    try {
        const response = await fetch(`${WEATHER_URL}${WEATHER_API}`);
        const json = await response.json();
        console.log(json);
    } catch(err) {
        console.error("There was an error: ", err);
    }
  }

  render() {
    return (
      <>
        <div>Forecast Container</div>
        <DegreeToggle />
        <DayCard />
      </>
    );
  }
}

export default ForecastContainer;
