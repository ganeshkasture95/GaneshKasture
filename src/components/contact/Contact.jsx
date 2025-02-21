import React, { useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsMessenger, BsWhatsapp } from 'react-icons/bs';
import './Contact.css';

import emailjs from '@emailjs/browser';

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vtf7nji', // Replace with your EmailJS Service ID
      'template_ip8d3qx', // Replace with your EmailJS Template ID
      form.current,
      't0EgQn-i_0EIIbTsA' // Replace with your EmailJS Public Key
    )
      .then((result) => {
        console.log('Success:', result.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error('Error:', error.text);
        alert("Failed to send message.");
      });
  };
  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ganeshkasture9595@gmail.com</h5>
            <a href="mailto:ganeshkasture9595@gmail.com" target='_blank'>Send a massage</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Massenger</h4>
            <h5>ganeshkasture</h5>
            <a href="https://m.me/ganesh.kasture.94" target='_blank'>Send a massage</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5></h5>
            <a href="https://wa.me/8767199980" target='_blank'>Send a massage</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact