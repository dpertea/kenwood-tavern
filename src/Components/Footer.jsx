import React, { useState, useEffect } from "react";
import "../App.css";
import circle from "../Images/circle-with-border.png";
import { firebaseApp } from "../initFirebase";
import { getDatabase, push, ref, set } from "firebase/database";

const db = getDatabase(firebaseApp);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 3000);
    }
  }, [success]);

  return (
    <div id="footerWrapper">
      <div id="subscribe-section">
        <h2 id="subscribe-header">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p>
          Stay in touch and keep up to date with Kenwood Tavern's news and
          events
        </p>

        <div id="email-input-wrapper">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const emailList = ref(db, "emails");
              const newEmail = push(emailList);
              set(newEmail, {
                email,
              });

              setEmail("");
              setSuccess(true);
            }}
          >
            <div className="input-container">
              <div className="label-input-container">
                <label htmlFor="email-input" id="email-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <button type="submit" id="subscribe">
                SUBSCRIBE
              </button>
            </div>
            <div
              id="confirmSub"
              style={{
                opacity: success ? 1 : 0,
                visibility: success ? "visible" : "hidden",
                transition: "visibility 1s, opacity 1s linear",
              }}
            >
              You have been subscribed!
            </div>
          </form>
        </div>
      </div>
      <div className="footerDiv">
        <div id="addressFooter">
          800 S Kenwood Ave
          <br />
          Baltimore, MD 21224
        </div>
        <img id="footer-logo" src={circle} alt="circle logo" />
        <div id="emailFooter">hello@kenwoodtavern.com</div>
      </div>
    </div>
  );
};

export default Footer;
