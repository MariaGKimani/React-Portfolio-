// ContactPage.js
import React from 'react';
import './style.scss';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-info-heading">Don't Be Shy!</h3>
          <p className="contact-info-paragraph">
            Feel free to contact me for any inquiries or just to say hello! <br/>
            Whether you have a project in mind, need some advice, or just want to chat about tech, 
            I'm here to help.<br/> Drop me a message, and I'll get back to you as soon as possible. 
            Looking forward to connecting with you!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Nairobi, Kenya</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:mariakimanigoretti@gmail.com" className="contact-link">
                mariakimanigoretti@gmail.com
                </a>
                </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>+254757612568</p>
            </div>
          </div>
        </div>
        <div className="contact-form-section">
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
