import React from "react";
import logo from "../img/logo-2-white.png";

const Nav = () => {
  return (
    <div className="nav-container container">
      <nav className="nav-wrapper">
        <div className="hamburgers">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <img id="logo" src={logo} alt="" />
        <ul>
          <li>
            <a href="#music">MUSIC</a>
          </li>
          <li>
            <a href="#gallery">GALLERY</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
