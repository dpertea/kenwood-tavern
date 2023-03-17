import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div id="footerWrapper">
      <h1 id="subscribe-header">SUBSCRIBE TO OUR NEWSLETTER</h1>
      <p>
        Stay in touch and keep up to date with Kenwood Tavern's news and events
      </p>

      <div id="email-input-wrapper">
        <form>
          <div className="input-container">
            <label for="email-input" id="email-label">
              Email:
            </label>
            <input type="email" id="email-input"></input>
          </div>
          <button id="subscribe">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
