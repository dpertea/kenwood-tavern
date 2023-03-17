import React from "react";
import "../App.css";
import circle from "../Images/circle-with-border.png";

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
      <footer>
        <div className="footerDiv">
          <div id="addressFooter">
            800 S Kenwood Ave
            <br />
            Baltimore, MD 21224
          </div>
          <img />
          <div id="emailFooter">hello@kenwoodtavern.com</div>
        </div>
      </footer>

      <br />
      <br />
    </div>
  );
};

export default Footer;
