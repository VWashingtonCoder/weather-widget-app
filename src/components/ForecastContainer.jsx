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
            imgId: item.weather[0].id,
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
      <div className="container mt-5">
        <h1 className="display-1 jumbotron bg-secondary py-5 mb-5">5-Day Forecast</h1>
        <h5  className="text-muted">Pueblo, Colorado USA</h5>
        <DegreeToggle />
        <div className="row justify-content-center">
            {!loading 
                ? data.map((item) => (<DayCard key={item.dt} data={item} />)) 
                : <div>Loading...</div>
            }
        </div>
        {error && <h3 className="text-danger">Error loading data</h3>}
      </div>
    );
  }
}

export default ForecastContainer;
