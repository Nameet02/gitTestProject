import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-company-info">
          <h1 className="footer-title">
            Baby<span className="highlight">Ku</span>
          </h1>
          <p className="footer-text">123 Fifth Ave, New York</p>
          <p className="footer-text">+1 1234567890</p>
          <p className="footer-text">mailId@example.com</p>
          <div className="social-icons">
            <span><FaFacebook className="social-icon" /></span>
            <span><FaTwitter className="social-icon" /></span>
            <span><FaInstagram className="social-icon" /></span>
            <span><FaYoutube className="social-icon" /></span>
          </div>
        </div>

        {/* Column 1: Customer Services */}
        <div className="footer-column">
          <h1 className="footer-subtitle">Customer Services</h1>
          <ul className="footer-list">
            <li className="footer-list-item">Contact Us</li>
            <li className="footer-list-item">Help & FAQs</li>
            <li className="footer-list-item">Payment Method</li>
            <li className="footer-list-item">Delivery Information</li>
            <li className="footer-list-item">Track Your Order</li>
            <li className="footer-list-item">Return & Exchanges</li>
          </ul>
        </div>

        {/* Column 2: Categories */}
        <div className="footer-column">
          <h1 className="footer-subtitle">Categories</h1>
          <ul className="footer-list">
            <li className="footer-list-item">Clothing & Fashion</li>
            <li className="footer-list-item">Toys</li>
            <li className="footer-list-item">School Supplies</li>
            <li className="footer-list-item">Birthday Party Supplies</li>
            <li className="footer-list-item">Baby Diapering</li>
          </ul>
        </div>

        {/* Column 3: Our Company */}
        <div className="footer-column">
          <h1 className="footer-subtitle">Our Company</h1>
          <ul className="footer-list">
            <li className="footer-list-item">Corporate Information</li>
            <li className="footer-list-item">Privacy & Cookies Policy</li>
            <li className="footer-list-item">Terms & Condition</li>
            <li className="footer-list-item">Promo & Terms</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-bottom-text">
        &copy; 2024 BabyKu. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
