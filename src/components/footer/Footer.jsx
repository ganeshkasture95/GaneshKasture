import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>GANESH</a>
      <ul className='parmalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/ganesh.kasture.94/"><BsFacebook/></a>
        <a href="https://www.instagram.com/_._ganesh._.k/?hl=en"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/ganesh-kasture-b9008a255/"><AiFillLinkedin/></a>
      </div>
      <div className='footer__copyright'>
        <small>@copy; GANESH KASTURE . All rights reserved.</small>

      </div>
    </footer>


  )
}

export default Footer