import React from "react";
import DayCard from "./DayCard";
import DegreeToggle from "./DegreeToggle";
import { WEATHER_API, WEATHER_URL } from "../constants";

class ForecastContainer extends React.Component {
  state = {
    data: [],
    loading: false,
    error: false,
  };
  async componentDidMount() {
    this.setState(({ loading: true }))
    try {
      const response = await fetch(`${WEATHER_URL}${WEATHER_API}`);
      if (response.ok) {
        const json = await response.json();
        const data = json.list
          .filter((day) => day.dt_txt.includes("00:00:00"))
          .map((item) => ({
            temp: item.main.temp,
            dt: item.dt,
            date: item.dt_txt,
            imgID: item.weather[0].icon,
            desc: item.weather[0].description,
          }));
        this.setState(({ 
            data: data,
            loading: false,
        }));
      } else {
        this.setState(({
            loading: false,
            error: true,
        }))
      }
    } catch (err) {
      console.error("There was an error: ", err);
    }
  }

  render() {
    const { loading, error, data } = this.state;
    return (
      <>
        <div>Forecast Container</div>
        <DegreeToggle />
        {!loading 
            ? data.map((item) => (<DayCard />)) 
            : <div>Loading...</div>
        }
      </>
    );
  }
}

export default ForecastContainer;
