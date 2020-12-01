import React from "react";
//img
import header1 from "../img/social/header1.png";
import facebook from "../img/social/facebook.svg"
import soundcloud from "../img/social/soundcloud.svg"
import spotify from "../img/social/spotify.svg"
import instagram from "../img/social/instagram.svg"
import youtube from "../img/social/youtube.svg"
//components
import Nav from "./Nav";

const Header = () => {
    return (
        <div className="header-wrapper">

            <Nav/>

            <div className="header-social-icons">
                <div className="facebook">
                    <img src={facebook} alt="facebook"/>
                </div>
                <div className="instagram">
                    <img src={instagram} alt="instagram"/>
                </div>
                <div className="soundcloud">
                    <img src={soundcloud} alt="soundcloud"/>
                </div>
                <div className="youtube">
                    <img src={youtube} alt="youtube"/>
                </div>
                <div className="spotify">
                    <img src={spotify} alt="spotify"/>
                </div>
            </div>

            <div className="img-wrapper">
                <img src={header1} alt="header1"/>
            </div>

        </div>
    )
}

export default Header;