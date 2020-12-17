import React from 'react'

const Picture = ({img, name}) => {
    return (
        <div className="image-container">
            <img src={img} alt={name}/>
        </div>
    )
}

export default Picture
