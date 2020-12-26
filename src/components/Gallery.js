import React, { useState } from "react";

import myGallery from "../dataPictures";
import Picture from "./Picture";
import instagram from "../img/social/instagram.svg";

const Gallery = () => {
  const [pics, setPics] = useState(myGallery);

  return (
    <div className="gallery-wrapper" id="gallery">
      <div className="gallery container">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-container">
          {pics.map((img) => (
            <Picture img={img.img} name={img.name} key={img.id} />
          ))}
        </div>
        <div className="follow-wrapper">
          <div className="follow-me-ig">
            <img src={instagram} alt="instagram" />
            <p>Follow me @jagsymusic for more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
