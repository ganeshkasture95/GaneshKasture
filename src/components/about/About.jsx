import React from 'react'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { BsAwardFill } from 'react-icons/bs'
import { PiUsersThreeDuotone } from 'react-icons/pi'
import me2 from '../../assets/ganesh redshirt mall .jpg'
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me2} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAwardFill className='about__icon' />


              <h5>Experience</h5>
              <small>3+Years of Working</small>
            </article>
            <article className='about__card'>
              < PiUsersThreeDuotone className='about__icon' />


              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className='about__card'>
              <AiTwotoneFolderOpen className='about__icon' />


              <h5>Projects</h5>
              <small>50+ Complited</small>
            </article>
          </div>
          <p>I have a greate experience of all the software technologies and have worked on all of them 
            
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>




    </section>
  )
}

export default About