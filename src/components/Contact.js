import React from 'react'
import {motion} from "framer-motion";
import Socials from "./Socials";
import {scrollAnim} from "../animation";
import {useScroll} from "../utils/useScroll";

const Contact = () => {
    const [element, controls] = useScroll();

    return (
        <div className="contact-wrapper">
            <motion.div className="container"
            ref={element} animate={controls} initial="hidden" variants={scrollAnim}>
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
            </motion.div>
        </div>
    )
}

export default Contact
