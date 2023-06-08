import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/muhammad-salman-12feb1998/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/muhammad-salman-saleem" target='_blank'><BsGithub/></a> 
        <a href="https://app.netlify.com/teams/msalman1221998/overview" target='_blank'><SiNetlify/></a>
      
    </div>
  )
}

export default HeaderSocials
