import React from 'react'

import Avtr1 from '../../assets/R1.jpg'
import Avtr2 from '../../assets/R2.jpg'
import Avtr3 from '../../assets/R3.jpg'
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar : Avtr1,
    name : 'Anna Disuza',
    review : 'Lorem ipsum dolorg elit. Necessitatibus delectus quam animi impedit. Repellat ratione quidem, pariatur temporibus porro earum.'
  },
  {
    avatar : Avtr2,
    name : 'David Max',
    review : 'Lorem ipsum dolor, ing elit. Necessitatibus delectus quam animi impedit. Repellat ratione quidem, pariatur temporibus porro earum.'
  },
  {
    avatar : Avtr3,
    name : 'Sudhanshu',
    review : 'Lorem ipsum doloipisicing elit. Necessitatibus delectus quam animi impedit. Repellat ratione quidem, pariatur temporibus porro earum.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reaview from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container textimonials__container" 
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key ={index} className="textimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials