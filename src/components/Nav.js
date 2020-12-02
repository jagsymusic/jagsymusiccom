import React from "react";
import logo from "../img/logo-2-white.png";

const Nav = () => {
    return(
        <div className="nav-container container">
            <nav className="nav-wrapper">
                <div className="hamburgers">
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                </div>
                <img id="logo" src={logo} alt=""/>
                <ul>
                    <li>ABOUT</li>
                    <li>GALLERY</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;