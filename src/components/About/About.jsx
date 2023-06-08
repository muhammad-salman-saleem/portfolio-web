import React from 'react';
import './About.css';
import ME from '../../Images/me-about.jpg'
import { FiAward,FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__card-icon' />
              <h5>Experience</h5>
              <small>Less Then 1 Year</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__card-icon' />
              <h5>Clients</h5>
              <small>20+ worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__card-icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui facere illo culpa rem id velit eaque fuga. Fugit temporibus doloremque corporis? Unde aperiam distinctio autem aliquid, vitae et? Architecto?</p>
          <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
