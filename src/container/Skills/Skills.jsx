import React from 'react'
import { motion } from 'framer-motion'

import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap} from '../../wrappers'

import "./Skills.scss"
import { useState } from 'react'
import { useEffect } from 'react'

const Skills = () => {

    const [technology, setTechnology] = useState([])
    const [experiences, setExperiences] = useState([])

    useEffect(() => {

        const query = '*[_type == "skills"]'
        const query_exp = '*[_type == "experiences"]'

        client.fetch(query)
            .then((data) => setTechnology(data))

        client.fetch(query_exp)
            .then((data) => {
                setExperiences(data)
            })

    }, [])

    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {technology.map((tech) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className='app__skills-item app__flex'
                            key={tech.name}
                        >
                            <div
                                className="app__flex"
                                style={{backgroundColor: tech.bgColor}}
                            >
                                <img src={urlFor(tech.icon)} alt={tech.name} />
                            </div>

                            <p className='p-text'>{tech.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <>
                            <motion.div
                                className="app__skills-exp-item"
                                key={experience.year}
                            >
                                <div className="app__skills-exp-year">
                                    <p className="bold-text">{experience.year}</p>
                                </div>

                                <motion.div
                                    className='app__skills-exp-works'
                                >
                                    {experience.works.map((work) => (
                                        <>
                                            <motion.div
                                                whileInView={{ opacity: [0, 1] }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className='app__skills-exp-work'
                                                key={work.name}
                                                id={work.name}
                                                data-tooltip-content = {work.desc}
                                            >
                                                <h4 className="bold-text">{work.name}</h4>
                                                <p className="p-text">{work.company}</p>
                                            </motion.div>
                                        </>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </>
                    ))}
                </div>

            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'), 
    'skills',
    'app__whitebg'
)