import React from "react";


const Song = ({song}) => {
    return (
        <div className="song-wrapper">
            <a href={song.url}><img src={song.cover} alt="song.title"/></a>
        </div>
    )
}

export default Song;