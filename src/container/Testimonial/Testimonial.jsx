import React from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrappers'
import { urlFor, client } from '../../client'
import "./Testimonial.scss"
import { useState } from 'react'
import { useEffect } from 'react'

const Testimonial = () => {

    const [brands, setBrands] = useState([])
    const [testimonials, setTestimonials] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        
        const query = '*[_type == "brands"]'
        const testimonialQuery = '*[_type =="testimonials"]'

        client.fetch(query)
            .then((data) => setBrands(data))

        client.fetch(testimonialQuery)
            .then((data) => setTestimonials(data))

    }, [])

    const handleClick = (index) => {
            setCurrentIndex(index)
    }

    const currTest = testimonials[currentIndex];

    return (
        <>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={urlFor(currTest.imageurl)} alt='testimonial' />
                        <div className="app__testimonial-content">
                            <p className="p-text">{currTest.feedback}</p>
                            <div>
                                <h4 className="bold-text">{currTest.name}</h4>
                                <h5 className="p-text">{currTest.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonials-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                                <HiChevronLeft />
                        </div>
                        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length-1 ? 0 : currentIndex + 1)}>
                                <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonials-brands app__flex">
                {brands.map((brand, index) => (
                    <motion.div
                        whileInView={{opacity: [0,1]}}
                        transition={{duration: 0.5}}
                        key={index}
                    >
                        <img src={urlFor(brand.imageurl)} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonials',
    'app_primarybg'
)