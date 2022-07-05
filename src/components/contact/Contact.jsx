import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_d67ivh9', form.current, 'bVGrbtZiy3ukAm3yz')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>tantai552001@gmail.com</h5>
            <a href='mailto:tantai552001.com' target='_blank'>Send a messenger</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Nguyen Tan Tai</h5>
            <a href='https://www.facebook.com/profile.php?id=100048158384695' target='_blank'>Send a messenger</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Hotline</h4>
            <h5>0922277941</h5>
            <a href='https://api.whatsapp.com/send?phone+0922277941' target='_blank'>Send a messenger</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea  name='messenger' rows='7' placeholder='Your Messenger' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messenger</button>
        </form>
      </div>
    </section>
  )
}

export default Contact