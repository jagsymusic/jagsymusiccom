import React, { useState, useEffect } from "react";
import logo from "../img/logo-2-white.png";
import {Link} from "react-scroll"

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
            <Link to="music" smooth={true} duration={1000}>MUSIC</Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={1000}>GALLERY</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
