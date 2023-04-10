import React from "react";
import DayCard from "./DayCard";
import DegreeToggle from "./DegreeToggle";

class ForecastContainer extends React.Component {
    render() {
        return (
            <>
                <div>Forecast Container</div>
                <DegreeToggle />
                <DayCard />
            </>
        )
    }
};

export default ForecastContainer;