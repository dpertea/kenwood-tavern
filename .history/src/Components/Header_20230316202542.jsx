import React from "react";
import logo from "../Images/logo.png";
import "../App.css";

const Header = () => {
  return (
    <div id="headerWrapper">
      <img id="headerLogo" src={logo} alt="Kenwood Tavern Logo" />
    </div>
  );
};

export default Header;
