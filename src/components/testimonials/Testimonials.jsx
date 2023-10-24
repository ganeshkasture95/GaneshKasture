import React from 'react'

import Avtr2 from '../../assets/R2.jpg'
import Avtr3 from '../../assets/R3.jpg'
import './testimonials.css'


const data = [
  // {
  //   avatar : Avtr1,
  //   name : 'Anna Disuza',
  //   review : 'The software solution that Ganesh Kasture developed for my business has greatly improved our efficiency and productivity. It has streamlined several processes and has provided us with valuable insights and analytics. I am confident that this software solution will continue to have a positive impact on our business for years to come..'
  // },
  {
    avatar : Avtr2,
    name : 'David Max',
    review : 'I highly recommend for app development, web development, and game development. Their team is skilled in creating custom applications, designing functional websites, and developing immersive games.'
  },
  {
    avatar : Avtr3,
    name : 'Sudhanshu',
    review : 'Ganesh excels in content creation. Their team of content creators can help craft engaging written content, captivating videos, and eye-catching graphics that showcase your brand effectively.'
  },
  // {
  //   avatar : Avtr1,
  //   name : 'Rinku',
  //   review : 'Lorem ipsum doloipisicing elit. Necessitatibus delectus quam animi impedit. Repellat ratione quidem, pariatur temporibus porro earum.'
  // },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reaview from clients</h5>
      <h2>Testimonials</h2>
      <div className="container textimonials__container" 
       >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <article key ={index} className="textimonial">
              <div className="client__avatar">
                <img src={avatar} article="gk"/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials