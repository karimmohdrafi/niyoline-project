import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import "../Motorcycle/Motorcycle.css";

const Motorcycle = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="diesel-oil-page">
      {/* Header with back button */}
      <div className="page-header">
        <button className="back-btn" onClick={handleBackClick}>
          ← Back to Home
        </button>
        <h1>Motorcycle Oils</h1>
      </div>

      <div className="content">
        {/* Left side product cards */}
        <div className="product-list">
          <div className="product-card">
            <h2>MASTERLINE RACING 2T</h2>
            <p>
              Low Smoke Formula Ultimate Performance 2T Oil Applications: 
              Racing 2T is developed to cater the lubrication requirements 
              of 2-stroke engines with...
            </p>
            <button className="read-btn">Read More</button>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <h2>Scootek 4T MCO</h2>
            <p>
              4T Engine Oil For New Generation Scooters Applications: 
              Scootek 4T 10W-30 API SN is a superior 4 stroke engine oil...
            </p>
            <button className="read-btn">Read More</button>
          </div>

          <div className="product-card">
            <h2>SYNTH 4T 10W-40 API SN | Fully Synthetic</h2>
            <p>
              Applications: Masterline MCO portfolio include advanced, 
              premium quality, fully-synthetic engine oils designed 
              specifically for the needs of motorcycles, including high...
            </p>
            <button className="read-btn">Read More</button>
          </div>

          <div className="product-card">
            <h2>DIESEL SPECIAL CF-4 | SAE 20W-40</h2>
            <p>
              Applications: Diesel Special 20W-40 API CF-4 is a heavy duty  
              diesel engine oil for use in naturally aspirated and turbocharged diesel engines...
            </p>
            <button className="read-btn">Read More</button>
          </div>

          <div className="product-card">
            <h2>TURBO SPECIAL CF-4 | SAE 15W-40</h2>
            <p>
              Heavy Duty Diesel Engine Oil Applications: 
              Turbo Special 15W-40 API CF-4 is a multigrade diesel engine oil for new generation...
            </p>
            <button className="read-btn">Read More</button>
          </div>

          <div className="product-card">
            <h2>TURBO SPECIAL CI-4 | SAE 15W-40 (SYNTHETIC BLEND)</h2>
            <p>
              Outstanding Engine Protection Applications: 
              Turbo Special 15W-40 API CI-4 is a premium quality 
              synthetic blend engine oil designed to provide excellent...
            </p>
            <button className="read-btn">Read More</button>
          </div>

          <div className="product-card">
            <h2>TURBO SPECIAL CI-4 PLUS | SAE 15W-40 (SYNTHETIC BLEND)</h2>
            <p>
              Applications:  Turbo Special 15W-40 API CI-4 Plus engine 
              oil is based on synthetic formula specially designed for latest turbo...
            </p>
            <button className="read-btn">Read More</button>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="sidebar">
          {/* Search box */}
          <div className="search-box">
            <label>Search</label>
            <div className="input-group">
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>
          </div>

          {/* Categories */}
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>Diesel Oil</li>
              <li>Gear Oil</li>
              <li>Greases</li>
              <li>Hydraulic Oil</li>
              <li>Motor Cycle Oils</li>
              <li>Passenger Oil</li>
              <li>Radiator Coolants</li>
            </ul>
          </div>

          {/* Office Address Section */}
          <div className="office-address">
            <h3>Office Address</h3>
            <p>
              <FaMapMarkerAlt className="icon" /> Gat No. 84/2B /1 / A,
              Tongoan Shivar Near M.S.E.B. Substation, Pachora Road, Bhadgaon,
              Dist- Jalgaon, MS. India.
            </p><br/>
            <p>
              <FaEnvelope className="icon" /> info@masterlinemail.com
            </p><br/>
            <p>
              <FaPhoneAlt className="icon" /> +91-9423187926
            </p>
          </div>

          {/* Social List */}
          <div className="social-list">
            <h3>Social List</h3>
            <div className="icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <p>
              Leave a Message Drop your comments below for any query about related project
            </p>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="Message"></textarea>
            <button>REQUEST SUBMIT</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Motorcycle;
