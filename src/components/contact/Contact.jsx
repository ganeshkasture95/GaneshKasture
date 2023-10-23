import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ganeshkasture9595@gmail.com</h5>
            <a href="mailto:ganeshkasture9595@gmail.com" target='_blank'>Send a massage</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Massenger</h4>
            <h5>ganeshkasture</h5>
            <a href="https://m.me/ganesh.kasture.94" target='_blank'>Send a massage</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5></h5>
            <a href="https://wa.me/8767199980" target='_blank'>Send a massage</a>
          </article>

        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="massage" rows="7" placeholder='your Massage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact