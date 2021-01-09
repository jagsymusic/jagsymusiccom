import React, {useState} from "react";
import {motion} from "framer-motion";
import myTracks from "../data";
import Song from "./Song";
import {useScroll} from "../utils/useScroll";
import {scrollAnim} from "../animation";

const Music = () => {
    const [songs, setSongs] = useState(myTracks());
    const [element, controls] = useScroll();

    return(
        <div className="music-wrapper">
            <motion.div className="music-container container"
            ref={element} animate={controls} initial="hidden" variants={scrollAnim}>
                <p className="music-title">CHECK OUT MY MUSIC</p>
                <div className="songs">
                    {songs.map(s => <Song song={s} key={s.id} />)}
                </div>
            </motion.div>
        </div>
  );
};

export default Music;
