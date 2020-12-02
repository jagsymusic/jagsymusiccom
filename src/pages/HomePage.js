import React from "react";
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
        </div>
    )
}

export default HomePage;