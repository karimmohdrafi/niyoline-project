import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductSection.css";

import diesel from "../assets/diesel.jpg";
import motorcycle from "../assets/motorcycle.jpg";
import car from "../assets/car.webp";
import hydraulic from "../assets/hydraulic.jpg";
import gear from "../assets/gear.webp";
import radiator from "../assets/radiator.jpg";
import grease from "../assets/grease.jpg";

const productsRow1 = [
  { img: diesel, title: "Diesel Engine Oils", link: "/diesel-oils" }, // <-- Added link
  { img: motorcycle, title: "Motor Cycle Oils", link: "/motorcycle"},
  { img: car, title: "Passenger Car Motor Oils" },
];

const productsRow2 = [
  { img: hydraulic, title: "Hydraulic Oil" },
  { img: gear, title: "Gear Oils" },
  { img: radiator, title: "Radiator Coolants" },
  { img: grease, title: "Greases" },
];

const ProductSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="product-section">
      <h2 className="section-title" data-aos="fade-down">
        Niyoline Product Line
      </h2>

      {/* First Row (3 items) */}
      <div className="product-row row-3">
        {productsRow1.map((item, index) => (
          <div
            className="product-card" style={{backgroundColor:'white', borderRadius:'50px'}}
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {item.link ? (
              <Link to={item.link} className="product-link">
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            ) : (
              <>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Second Row (4 items) */}
      <div className="product-row row-4">
        {productsRow2.map((item, index) => (
          <div
            className="product-card" style={{backgroundColor:'white', borderRadius:'50px'}}
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
