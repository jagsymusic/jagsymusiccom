import React from "react";


const Song = ({song}) => {

    const handleSong = () => {

    }

    return (
        <div className="song-wrapper">
            <a href={song.url}><img src={song.cover} alt="song.title"/></a>
        </div>
    )
}

export default Song;