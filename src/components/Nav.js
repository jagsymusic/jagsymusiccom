import React from "react";
import logo from "../img/logo-2-white.png";

const Nav = () => {
    return(
        <div className="nav-container container">
            <nav className="nav-wrapper">
                <img id="logo" src={logo} alt=""/>
                <ul>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;