
import React from 'react';
import './style.scss';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p><FaPhoneAlt className="footer-icon" /> +254 757 612 568</p>

        <p><FaEnvelope className="footer-icon" /> <a href="mailto:mariakimanigoretti@gmail.com">mariakimanigoretti@gmail.com</a></p>
        <p><FaMapMarkerAlt className="footer-icon" /> Nairobi, Kenya</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Maria Goretti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

