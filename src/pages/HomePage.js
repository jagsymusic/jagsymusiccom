import React from "react";
import Gallery from "../components/Gallery";
//components
import Header from "../components/Header";
import Music from "../components/Music";
import Player from "../components/Player";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Music/>
            <Player/>
            <Gallery />
        </div>
    )
}

export default HomePage;