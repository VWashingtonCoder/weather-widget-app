import React from "react";

const DegreeToggle = ({ updateForecastDegree, degreeType }) => {
  return (
    <React.Fragment>
        <div className="form-check form-check-inline">
            <input
                type="radio"
                className="form-check-input"
                name="degree-type"
                id="celsius"
                value="celsius"
                onChange={updateForecastDegree}
                checked={degreeType === "celsius"}
            />
            <label htmlFor="celsius">Celsius</label>
        </div>
        <div className="form-check form-check-inline">
            <input
                type="radio"
                className="form-check-input"
                name="degree-type"
                id="fahrenheit"
                value="fahrenheit"
                onChange={updateForecastDegree}
                checked={degreeType === "fahrenheit"}
            />
            <label htmlFor="fahrenheit">Fahrenheit</label>
        </div>
    </React.Fragment>
  );
};

export default DegreeToggle;
