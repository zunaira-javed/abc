import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-column">
          <div className="footer-logo-section">
            <img src="/images/logo.jpg" alt="Logo" className="footer-logo" />
          </div>
          <p className="footer-description">
            Your premier destination for elegant fashion, exquisite jewellery, and timeless style.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/new-arrival">New Arrivals</Link></li>
            <li><Link to="/jewellery/rings">Jewellery</Link></li>
            <li><Link to="/ready-to-wear">Ready to Wear</Link></li>
            <li><Link to="/footwear">Footwear</Link></li>
            <li><Link to="/shawls">Shawls</Link></li>
          </ul>
        </div>

        {/* Collections */}
        <div className="footer-column">
          <h3 className="footer-heading">Collections</h3>
          <ul className="footer-links">
            <li><Link to="/collection/summer">Summer Collection</Link></li>
            <li><Link to="/collection/winter">Winter Collection</Link></li>
            <li><Link to="/collection/west">Western Wear</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>📧 info@clothing-store.com</li>
            <li>📞 +92 300 1234567</li>
            <li>📍 Karachi, Pakistan</li>
          </ul>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Clothing Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
