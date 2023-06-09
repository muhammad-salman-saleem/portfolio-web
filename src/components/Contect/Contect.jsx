import React, { useRef } from 'react';
import './Contect.css';
import { MdOutlineMail } from 'react-icons/md';
import { TfiSkype } from 'react-icons/tfi';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';



const Contect = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dfpb96z', 'template_78rk8wr', form.current, '0RbkmwTQsUkolvQqn')
    e.target.reset()
    notify();
  };
  const notify = () => { toast.success('Thanks For Contact Me') };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>msalmankasuri@gmail.com</h5>
            <a href="mailto:msalmankasuri@gmail.com" target={'_blank'}>Send a message</a>
          </article>
          <article className="contact__option">
            <TfiSkype className='contact__option-icon' />
            <h4>Skype</h4>
            <h5>Muhammad Salman</h5>
            <a href="https://join.skype.com/invite/yJWbEEauacu2" target={'_blank'}>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+923000071456</h5>
            <a href="https://api.whatsapp.com/send?phone=+923000071456" target={'_blank'}>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button><Toaster
            position="top-center"
            reverseOrder={false}
          />
        </form>
      </div>
    </section>
  )
}

export default Contect
