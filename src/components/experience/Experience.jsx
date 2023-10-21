import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs"
import './Experience.css'

const Experience = () => {
  return (
    <section id='experience'>

      <h5> what Skills I Have</h5>
      <h2>MY Experiesce</h2>
      <div className='container experience__container'>
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <div>
            <h4>CSSL</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <div>
            <h4>React</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
        </div>


      </div>
      <div className="experience__backend">
      
        <h3>Backend Development</h3>
        <div className="experience__content">
        <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <h4>JavaScript</h4>
            <small className='text-light'> Experienced</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <h4>Django</h4>
            <small className='text-light'> Experienced</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <h4>Node Js</h4>
            <small className='text-light'> Experienced</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <h4>mongoDB</h4>
            <small className='text-light'> Experienced</small>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__detail-icons"/>
            <h4>SQL</h4>
            <small className='text-light'> Experienced</small>
          </article>
        </div>

      </div>

      </div>
    </section>
  )
}

export default Experience