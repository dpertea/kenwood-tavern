import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div id="footerWrapper">
      <h2 id="subscribe-header">SUBSCRIBE TO OUR NEWSLETTER</h2>
      <p>
        Stay in touch and keep up to date with Kenwood Tavern's news and events
      </p>

      <div id="email-input-wrapper">
        <form>
          <div className="input-container">
            <div className="label-input-container">
              <label for="email-input" id="email-label">
                Email:
              </label>
              <input type="email" id="email-input"></input>
            </div>
            <button id="subscribe">SUBSCRIBE</button>
          </div>
        </form>
      </div>
      <div id="addressFooter">800 S Kenwood</div>
    </div>
  );
};

export default Footer;
