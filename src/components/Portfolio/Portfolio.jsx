import React from 'react';
import './Portfolio.css';
import IMG1 from '../../Images/portfolio1.jpg'
import IMG2 from '../../Images/portfolio2.jpg'
import IMG3 from '../../Images/portfolio3.jpg'
import IMG4 from '../../Images/portfolio4.jpg'
import IMG5 from '../../Images/portfolio5.png'
import IMG6 from '../../Images/portfolio6.jpg'



const data = [
  {
    id: 1,
    Image: IMG1,
    title: 'Cripto Curency Dashboard & Finencial Visualization',
    github: 'https://github.com/muhammad-salman-saleem',
    demo: '#'

  },
  {
    id: 2,
    Image: IMG2,
    title: 'Cripto Curency Dashboard & Finencial Visualization',
    github: 'https://github.com/muhammad-salman-saleem',
    demo: '#'

  },
  {
    id: 3,
    Image: IMG3,
    title: 'Cripto Curency Dashboard & Finencial Visualization',
    github: 'https://github.com/muhammad-salman-saleem',
    demo: '#'

  },
  {
    id: 4,
    Image: IMG4,
    title: 'Cripto Curency Dashboard & Finencial Visualization',
    github: 'https://github.com/muhammad-salman-saleem',
    demo: '#'

  },
  {
    id: 5,
    Image: IMG5,
    title: 'Cripto Curency Dashboard & Finencial Visualization',
    github: 'https://github.com/muhammad-salman-saleem',
    demo: '#'

  },
  {
    id: 6,
    Image: IMG6,
    title: 'Cripto Curency Dashboard & Finencial Visualization',
    github: 'https://github.com/muhammad-salman-saleem',
    demo: '#'

  }

]

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, Image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={Image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
