import React from "react";
import SpotifyPlayer from "react-spotify-player";

const MusicList = () => {
  const size = {
    width: "100%",
    height: 300,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'

  return (
    <div>
      <h3>My music</h3>

      <SpotifyPlayer
        uri="https://open.spotify.com/artist/7wu8XR5hwRbOweUONPzNvL?si=jlx6FSrMRu6YH_xhldNuNQ"
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
};

export default MusicList;
