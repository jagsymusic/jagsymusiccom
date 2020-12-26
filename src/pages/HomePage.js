import React from "react";
import Gallery from "../components/Gallery";
//components
import Header from "../components/Header";
import Music from "../components/Music";
import Player from "../components/Player";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Music />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
