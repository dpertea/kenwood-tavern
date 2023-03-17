import React from "react";
import "../App.css";

const Landing = () => {
  return (
    <div className="pastel-blue landingWrapper">
      <h1>HOURS</h1>
      <div id="hours-list-wrapper">
        <div id="days" className="hours-child">
          THURSDAY
          <br />
          <br /> FRIDAY
          <br />
          <br />
          SATURDAY
          <br />
          <br /> SUNDAY
          <br />
        </div>
        <div id="hours" className="hours-child">
          4PM-MIDNIGHT
          <br /> 4PM-MIDNIGHT
          <br /> 4PM-MIDNIGHT
          <br /> 4PM-MIDNIGHT
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landing;
