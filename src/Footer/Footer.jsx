import React from "react";
import "../Footer/Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Registered Sales Office */}
        <div className="footer-section">
          <img
            src="src/assets/niyoline-logo.png" // replace with your logo
            alt="Masterline Logo"
            className="footer-logo"
          />
          <h3 className="footer-title">Registered Sales Office</h3>
          <p>Shrinath Warehousing, Near Fly-Over<br/>Phursungi, Pune, Maharashtra India.</p>
          <p><FaPhoneAlt /> +91-9423187924</p>
          <p><FaPhoneAlt /> +91-9423187925</p>
          <p><FaPhoneAlt /> +91-9423187926</p>
          <p><FaEnvelope /> info@masterlinemail.com</p><br/>

          <div className="social-icons">
            <a href="#"><FaFacebook  style={{fontSize:'28px'}}/></a>
            <a href="#"><FaLinkedin  style={{fontSize:'28px'}}/></a>
            <a href="#"><FaInstagram style={{fontSize:'28px'}}/></a>
            <a href="#"><FaYoutube style={{fontSize:'28px'}}/></a>
          </div>
        </div>

        {/* Recent News */}
        <div className="footer-section">
          <h3 className="footer-title">Recent News</h3>
          <div className="news-item">
            <img src="src/assets/sae-logo.jpeg" alt="SAE" />
            <div>
              <p>What Is SAE</p>
              <span><i class="fa-regular fa-clock"></i> 17 Jan, 2023</span>
            </div>
          </div>
          <div className="news-item">
            <img src="src/assets/monograde-logo.jpeg" alt="Monograde Oil" />
            <div>
              <p>What Is A Monograde Oil?</p>
              <span><i class="fa-regular fa-clock"></i> 17 Jan, 2023</span>
            </div>
          </div>
          <div className="news-item">
            <img src="src/assets/viscosity-logo.jpeg" alt="Viscosity" />
            <div>
              <p>What Is Viscosity?</p>
              <span><i class="fa-regular fa-clock"></i> 17 Jan, 2023</span>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3 className="footer-title">Useful Links</h3>
          <ul>
            <li><a href="#"><i class="fa-solid fa-angle-right"></i> About</a></li>
            <li><a href="#"><i class="fa-solid fa-angle-right"></i> Management</a></li>
            <li><a href="#"><i class="fa-solid fa-angle-right"></i> Products</a></li>
            <li><a href="#"><i class="fa-solid fa-angle-right"></i> Photo Gallery</a></li>
            <li><a href="#"><i class="fa-solid fa-angle-right"></i> CSR</a></li>
            <li><a href="#"><i class="fa-solid fa-angle-right"></i> Contact Us</a></li>
            <li><a href="#"><i class="fa-solid fa-angle-right"></i> Blog</a></li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div className="footer-section">
          <h3 className="footer-title">Corporate Office</h3>
          <p>
            Gat No. 84/2B/1/A, Tongoan Shivar<br />
            Near M.S.E.B. Substation, Pachora Road,<br />
            Bhadgaon, Dist- Jalgaon, Maharashtra India.
          </p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Masterline Engine Oils | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
