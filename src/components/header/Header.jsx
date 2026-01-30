import React from 'react'
import ME from '../../assets/GK-Black Bleaser Background Removed (1).png'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5 className="text-light">
          Hello, I'm
        </h5>
        <h1>Ganesh Kasture</h1>
        <h5 className="text-light header__subtitle">Full-Stack Developer & Mobile App Developer</h5>
        <p className="text-light header__description">
          Building scalable applications with React, React Native, Node.js, and modern cloud technologies. 
          Passionate about creating seamless user experiences and robust backend systems.
        </p>
       
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Ganesh Kasture" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header