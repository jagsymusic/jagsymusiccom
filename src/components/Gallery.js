import React, { useState } from "react";

import myGallery from "../dataPictures";
import Picture from "./Picture";
import instagram from "../img/social/instagram.svg"
import {useScroll} from "../utils/useScroll";
import {scrollAnim} from "../animation";
import {motion} from "framer-motion";


const Gallery = () => {
    const [pics, setPics] = useState(myGallery);
    const [element, controls] = useScroll();

    return (
        <div className="gallery-wrapper">
            <motion.div className="gallery container"
            ref={element} animate={controls} initial="hidden" variants={scrollAnim}>
                <h1 className="gallery-title">Gallery</h1>
                <div className="gallery-container">
                    {pics.map((img) => (
                        <Picture img={img.img} name={img.name} key={img.id}/>
                    ))}
                </div>
                <div className="follow-wrapper">
                    <a href="http://instagram.com/jagsymusic">
                        <div className="follow-me-ig">
                            <img src={instagram}  alt="instagram"/>
                            <p>Follow me @jagsymusic for more</p>
                        </div>
                    </a>
                </div>
            </motion.div>
        </div>
  );
};

export default Gallery;
