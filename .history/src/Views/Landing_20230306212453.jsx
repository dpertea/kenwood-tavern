import React from "react";
import "../App.css";

const Landing = () => {
  return (
    <div className="pastel-blue landingWrapper">
      <h1>HOURS</h1>
      <div id="hours-list-wrapper">
        <div id="days" className="hours-child">
          <p>THURSDAY</p>
          <p>FRIDAY</p>
          <p>SATURDAY</p>
          <p>SUNDAY</p>
        </div>
        <div id="hours" className="hours-child">
          <p>4PM-MIDNIGHT</p>
          <p>4PM-MIDNIGHT</p>
          <p>4PM-MIDNIGHT</p>
          <p>4PM-MIDNIGHT</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
