import React, {useState} from "react";
import {motion} from "framer-motion";
//data
import myTracks from "../data";
//components
import Song from "./Song";

const Music = () => {

    const [songs, setSongs] = useState(myTracks());

    return(
        <div className="music-wrapper">
            <div className="music-container container">
                <p className="music-title">CHECK OUT MY MUSIC</p>
                <div className="songs">
                    {songs.map(s => <Song song={s} key={s.id} />)}
                </div>
            </div>
        </div>
    )
}

export default Music;