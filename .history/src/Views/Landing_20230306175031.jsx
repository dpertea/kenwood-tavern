import React from "react";
import "../App.css";

const Landing = () => {
  return (
    <div className="light-grey-back">
      <h1>HOURS</h1>
      <div id="hours-list-wrapper">
        <div id="days">THURSDAY FRIDAY SATURDAY SUNDAY</div>
        <div id="hours">
          4PM-MIDNIGHT 4PM-MIDNIGHT 4PM-MIDNIGHT 4PM-MIDNIGHT
        </div>
      </div>
    </div>
  );
};

export default Landing;
