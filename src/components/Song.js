import React from "react";

const Song = ({song}) => {
    return (
        <div className="song-wrapper">
            <img src={song.cover} alt="song.title"/>
        </div>
    )
}

export default Song;