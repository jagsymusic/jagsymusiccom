import React from "react";
//img
import header1 from "../img/header2.png";
//components
import Socials from "./Socials";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Socials pos="header-social-icons" />

      <div className="img-wrapper">
        <img src={header1} alt="header1" />
      </div>
    </div>
  );
};

export default Header;
