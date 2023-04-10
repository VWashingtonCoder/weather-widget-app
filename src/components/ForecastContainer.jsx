import React from "react";
import DayCard from "./DayCard";
import DegreeToggle from "./DegreeToggle";
import { WEATHER_API, WEATHER_URL } from "../constants";

class ForecastContainer extends React.Component {
  async componentDidMount() {
    try {
        const response = await fetch(`${WEATHER_URL}${WEATHER_API}`);
        if (response.ok) {
            // console.log(response);
            const json = await response.json();
            // console.log(json);
            const data = json.list.filter(day => day.dt_txt.includes("00:00:00")).map(item => ({
                temp: item.main.temp,
                dt: item.dt,
                date: item.dt_txt,
                imgID: item.weather[0].icon,
                desc: item.weather[0].description
            }));
            console.log(data);
        } else {
            // Do Something
        }
        
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
