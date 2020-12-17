import React from 'react'

// Icons
import facebook from "../img/social/facebook.svg"
import soundcloud from "../img/social/soundcloud.svg"
import spotify from "../img/social/spotify.svg"
import instagram from "../img/social/instagram.svg"
import youtube from "../img/social/youtube.svg"

const Socials = ({pos}) => {
    return (
        <div className={pos}>
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
    )
}

export default Socials
