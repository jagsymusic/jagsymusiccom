import React from 'react'
import Socials from "./Socials";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer container">
                <div className="footer-copyright">
                    <p>&copy; 2020 jagsymusic. All rights reserved.</p>
                </div>
                <div className="footer-some">
                    <Socials pos="footer-socials" />
                </div>
            </div>
        </div>
    )
}

export default Footer
