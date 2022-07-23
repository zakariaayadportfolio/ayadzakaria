import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useState as UseState, useRef as UseRef } from "react"
import emailjs from 'emailjs-com'

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ds87b9', 'template_fox84sb', form.current, 'R7pzXUztNKAL33B8A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

      });
      e.target.reset()

  };
  return (
    <section id='contact' >
      <h5> Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <artical className="contact__option">
            < MdOutlineEmail className='contact__option-icon' />
            <h4> Email </h4>
            <h5>ayadzakaria.pro@gmail.com</h5>
            <a href="mailto:ayadzakaria.pro@gmail.com" target='_blank'> Send A Message</a>
          </artical>

          <artical className="contact__option">
            < RiMessengerLine className='contact__option-icon'/>
            <h4> Messenger </h4>
            <h5> Ayad Zakaria </h5>
            <a href="https://m.me/zakaria.ayad.332" target='_blank'> Send A Message</a>
          </artical>
          

          <artical className="contact__option">
            < BsWhatsapp className='contact__option-icon'/>
            <h4> WhatsApp </h4>
            <h5>+212 600-00-000 </h5>
            <a href="https://api.whatsapp.com/send?phone=212699913184" target='_blank'> Send A Message</a>
          </artical>

        </div>

        {/*=====End OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Type Your Message ...' required></textarea>
          <button className='btn btn-primary' type='submit'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default contact