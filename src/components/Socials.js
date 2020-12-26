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
                <a href="https://www.facebook.com/JagsyMusic/"><img src={facebook} alt="facebook"/></a>
            </div>
            <div className="instagram">
                <a href="http://instagram.com/jagsymusic"><img src={instagram} alt="instagram"/></a>
            </div>
            <div className="soundcloud">
                <a href="https://soundcloud.com/jagsyofficials"><img src={soundcloud} alt="soundcloud"/></a>
            </div>
            <div className="youtube">
                <a href="https://www.youtube.com/channel/UCqh0B84a068fC55ZvTmgIwg"><img src={youtube} alt="youtube"/></a>
            </div>
            <div className="spotify">
                <a href="https://open.spotify.com/artist/7wu8XR5hwRbOweUONPzNvL?si=0fIoE0hZT6mjeYoyGdmdSQ"><img src={spotify} alt="spotify"/></a>
            </div>
        </div>
    )
}

export default Socials
