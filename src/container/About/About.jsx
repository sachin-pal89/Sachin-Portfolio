import React from 'react'

import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from "../../wrappers"

import "./About.scss"
import { useState } from 'react'
import { useEffect } from 'react'

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        
        const query = '*[_type == "abouts"]';
        
        client.fetch(query)
            .then((data) => setAbouts(data));
        
    }, [])

    return (
        <>
            <h2 className="head-text">I Know That <span>    Good Developer</span><br />means<span>    Great Product</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1}}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween'}}
                        className="app__profile-item"
                        key = {about.title + index}
                    >
                        <img src={urlFor(about.imageurl)} alt={about.title} />
                        <h2 className="bold-text">{about.title}</h2>
                        <p className="p-text">{about.description}</p>
                    </motion.div>
                ))}
            </div>

        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'), 
    'about',
    'app__whitebg'
)