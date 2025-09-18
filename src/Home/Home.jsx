import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

// Carousel images
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.jpg";

// Section image
import aboutImg from "../assets/about.jpg"; // 👉 Replace with your actual image

const images = [slide1, slide2, slide3];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="home-wrapper">
      {/* Top Section with Text + Carousel */}
      <div className="hero-section">
        {/* Left Box (Text & Buttons) */}
        <div className="hero-left">
          <h1 className="home-title">Niyoline - Crafted with Grace</h1>
          <p className="home-caption">
            Your trusted partner in high-quality lubricants and engine oils.
          </p>
          <div className="buttons">
            <button className="btn btn-primary">Our Products</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>

        {/* Right Box (Carousel) */}
        <div className="hero-right">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <section
        ref={sectionRef}
        className={`about-section ${isVisible ? "show" : ""}`}
      >
        <div className={`about-left ${isVisible ? "slide-in-left" : ""}`}>
          <img src={aboutImg} alt="About Us" />
        </div>
        <div className={`about-right ${isVisible ? "slide-in-right" : ""}`}>
          <h2>NIYOLINE ENGINE OILS</h2>
          <p>
            At Niyoline Lubricants Pvt. Ltd, we are driven by a singular
            vision: to be a leading force in the lubricants industry, not just
            in India, but globally. For over two decades, we have been crafting
            top-quality industrial and automotive lubricants under the brand
            name "MASTERLINE Engine Oils," earning our ISO 9001:2015 and
            14001:2015 certifications along the way. Our state-of-the-art
            facility in Bhadgaon, Maharashtra is equipped with the latest
            technology, allowing us to constantly exceed customer expectations.
          </p>
          <button className="btn btn-primary">About Us</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
