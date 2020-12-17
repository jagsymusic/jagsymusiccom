import React from "react";
import Gallery from "../components/Gallery";
//components
import Header from "../components/Header";
import Music from "../components/Music";
import Player from "../components/Player";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Music/>
            <Gallery />
            <Player/>
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage;