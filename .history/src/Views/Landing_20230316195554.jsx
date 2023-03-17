import React from "react";
import "../App.css";
import insta from "../Images/instagram.svg";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <div className="landingWrapper">
      <h1>HOURS</h1>
      <div id="hours-list-wrapper">
        <div id="days" className="hours-child">
          <p>THURSDAY</p>
          <p>FRIDAY</p>
          <p>SATURDAY</p>
          <p>SUNDAY</p>
        </div>
        <div id="hours" className="hours-child">
          <p>4PM-12AM</p>
          <p>4PM-MIDNIGHT</p>
          <p>4PM-MIDNIGHT</p>
          <p>4PM-MIDNIGHT</p>
        </div>
      </div>
      <div id="social">
        <a
          href="https://www.instagram.com/kenwood.tavern/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img id="insta" src={insta} alt="instagram icon" />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
