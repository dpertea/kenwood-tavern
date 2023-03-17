import React from "react";
import logo from "../Images/logo.png";
import circle from "../Images/circle-with-border.png";
import "../App.css";

const Header = () => {
  return (
    <div id="headerWrapper">
      <img id="headerLogo" src={circle} alt="Kenwood Tavern Logo" />
      <h1>WELCOME TO KENWOOD TAVERN</h1>
    </div>
  );
};

export default Header;
