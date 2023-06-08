import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../Images/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello i'm</h5>
            <h1>Muhammad Salman</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
              <img src={ME} alt="" />
            </div>
            <a href="#contect" className='scrol__down'>Scrol Down</a>
        </div>
    </header>
  )
}

export default Header
