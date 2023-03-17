import React from "react";
import logo from "../Images/logo.jpeg";
import "../App.css";

const Header = () => {
  return (
    <div id="headerWrapper" className="pastel-green">
      <img id="headerLogo" src={logo} alt="Kenwood Tavern Logo" />
    </div>
  );
};

export default Header;
