import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div id="footerWrapper">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <p>
        Stay in touch and keep up to date with Kenwood Tavern's news and events
      </p>

      <div id="email-input-wrapper">
        <div className="input-Container">
          <label for="email-input">Email:</label>
          <input type="email" id="email-input"></input>
        </div>
      </div>
    </div>
  );
};

export default Footer;
