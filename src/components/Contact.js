import React from 'react'

import Socials from "./Socials";

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="container">
                <h1 className="contact-title">Contact me</h1>
                <div className="contacts">
                    <div className="contact-general">
                        <h1>General</h1>
                        <p>contact@jagsymusic.com</p>
                    </div>
                    <div className="contact-demos">
                        <h1>Demos</h1>
                        <p>demos@jagsymusic.com</p>
                    </div>
                </div>
                
                {/*<Socials pos="contact-socials"/>*/}
            </div>
        </div>
    )
}

export default Contact
