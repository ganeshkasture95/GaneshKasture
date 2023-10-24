import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import './Sercixes.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="srevice__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>User Interface (UI) Design.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Wireframing and Prototyping.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>User Experience (UX) Design.</p>
            </li>
            {/* <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, eligendi.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, eligendi.</p>
            </li> */}
          </ul>
        </article>

        <article className="service">
          <div className="srevice__head">
            <h3>Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Web development: Designing and building websites.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Mobile app development: Creating mobile applications.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Game development: Creating engaging games.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Cybersecurity services: Implementing security measures.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Cloud computing services: Assisting businesses.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>IT project management: Overseeing the planning.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="srevice__head">
            <h3> Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Video editing: Editing raw footage to best veadio.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Animation & motion graphics: Creating animated elements.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>SEO optimization: Optimizing video titles,tags.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Audience engagement strategies: Developing strategies.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Livestreaming: Assisting and Technology</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services