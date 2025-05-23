import React from 'react'

const NavigationDots = ({active}) => {
    return (
        <div className="app__navigation">
            {['Home', 'About', 'Work', 'Skills', 'Testimonial','Contact'].map((item, index) => (
                <a 
                href={`#${item}`} 
                key = {item + index}
                className="app__navigation-dot"
                style={active === item ? {background: '#313BAC'} : { }}
                >
                </a>
            ))}
        </div>
    )
}

export default NavigationDots