import React from "react";
import SpotifyPlayer from "react-spotify-player";

const Player = () => {
    const size = {
        width: '100%',
        height: 300,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return(
        <div className="player-wrapper">
            <div className="container">
                <div className="player">
                    <SpotifyPlayer
                        uri="spotify:artist:7wu8XR5hwRbOweUONPzNvL"
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </div>
            </div>
        </div>
    )
}

export default Player;