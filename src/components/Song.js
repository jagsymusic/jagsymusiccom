import React from "react";
import {motion} from "framer-motion";
//import {fadeIn} from "../animation";

const Song = ({song}) => {
    return (
        <motion.div className="song-wrapper" whileHover={{scale: 1.02, transition: {duration: 0.3 }}}>
            <a href={song.url}><img src={song.cover} alt="song.title"/></a>
        </motion.div>
    )
}

export default Song;