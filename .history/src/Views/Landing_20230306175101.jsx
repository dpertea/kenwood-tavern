import React from "react";
import "../App.css";

const Landing = () => {
  return (
    <div className="light-grey-back">
      <h1>HOURS</h1>
      <div id="hours-list-wrapper">
        <div id="days">
          THURSDAY
          <br /> FRIDAY
          <br /> SATURDAY
          <br /> SUNDAY
          <br />
        </div>
        <div id="hours">
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
