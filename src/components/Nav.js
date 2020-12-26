import React, { useState, useEffect } from "react";
import logo from "../img/logo-2-white.png";

const Nav = () => {
  const [navBackground, setNavBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight && !navBackground) {
        setNavBackground(true);
      } else if (window.pageYOffset <= window.innerHeight && navBackground) {
        setNavBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navBackground]);
  return (
    <div className="nav-container container">
      <nav className={`nav-wrapper ${navBackground ? "nav-background" : ""}`}>
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
