import React from 'react'

import { BsTwitter, BsInstagram } from "react-icons/bs"
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
            <a href="https://twitter.com/pal_sachin89" target="_blank" rel='noopener noreferrer'><BsTwitter /></a>
            </div>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100059425995378" target="_blank" rel='noopener noreferrer'><FaFacebookF /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/sachinpal8040/" target="_blank" rel='noopener noreferrer'><BsInstagram /></a>
            </div>
        </div>
    )
}

export default SocialMedia