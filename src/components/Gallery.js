import React, { useState } from 'react'

import myGallery from "../dataPictures";

const Gallery = () => {
    const [pics, setPics] = useState(myGallery);

    return (
        <div>
            {pics.map((img) => (
                <img src={img.img} alt={img.name}/>
            ))}
        </div>
    )
}

export default Gallery