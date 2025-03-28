import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from "./components"
import "./App.scss"

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <section id="Home">
                <Header />
            </section>
            <section id="About">
                <About />
            </section>
            <section id="Work">
                <Work />
            </section>
            <section id="Skills">
                <Skills />
            </section>
            <section id="Testimonial">
                <Testimonial />
            </section>
            <section id="Contact">
                <Footer />
            </section>
        </div>
    )
}

export default App