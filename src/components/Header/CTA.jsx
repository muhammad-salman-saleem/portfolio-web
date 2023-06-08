import React from 'react'
import CV from '../../Images/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Dowonload CV</a>
      <a href="#contect" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
