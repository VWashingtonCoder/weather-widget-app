import React from "react";
import moment from "moment";

const DayCard = (props) => {
  const { 
    data, 
    degreeType, 
    speedType, 
    updateWindSpeedType 
  } = props;
  const { 
    temp, 
    dt, 
    imgId, 
    desc,
    feelsLike,
    humidity,
    windSpeed 
  } = data;

  const newDate = new Date();
  newDate.setTime(dt * 1000);
  const icon = `owf owf-${imgId} owf-5x`;

  const fahrenheit = Math.round(temp);
  const celsius = Math.round((fahrenheit - 32) * (5 / 9));
  const feelsFahrenheit = Math.round(feelsLike);
  const feelsCelsius = Math.round((feelsFahrenheit - 32) * (5 / 9));
  const mphWind = Math.round(windSpeed);
  const kphWind = Math.round(mphWind * 1.609344); 

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">
          {moment(newDate).format("MMMM Do, h:mm a")}
        </p>
        <i className={icon}></i>
        <h2>{degreeType === "celsius" ? `${celsius} °C` : `${fahrenheit} °F`}</h2>
        <div className="card-body">
          <p className="card-text">{desc}</p>
          <p className="card-text">
            Feels Like: {degreeType === "celsius" 
              ? `${feelsCelsius} °C` 
              : `${feelsFahrenheit} °F`
            }
          </p>
          <p className="card-text">Humidity: {humidity}%</p>
          <div className="card-text">
            <label htmlFor="speedType">
              Wind: {speedType === "mph" ? mphWind : kphWind}
            </label>
            <select name="speed-type" id="speedType" onChange={updateWindSpeedType} style={{border: "none"}}>
              <option value="mph">mph</option>
              <option value="kph">kph</option>
            </select> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
