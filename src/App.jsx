import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./Home/Home";
import ProductSection from "./ProductSection/ProductSection";
import SocialSection from "./SocialSection/SocialSection";
import Footer from "./Footer/Footer";

// Pages
import DieselOilPage from "./DieselOilPage/DieselOilPage";
import Motorcycle from "./Motorcycle/Motorcycle";

// Create a HomePage component that contains all home page sections
const HomePage = () => {
  return (
    <div>
      <Home />
      <ProductSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page (default route) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Diesel Oil Page - Only this component, nothing else */}
        <Route path="/diesel-oils" element={<DieselOilPage />} />
        <Route path="/motorcycle" element={<Motorcycle />} />
        
        {/* Add other product pages as needed */}
        {/* <Route path="/motorcycle-oils" element={<MotorcycleOilPage />} /> */}
        {/* <Route path="/passenger-car-oils" element={<PassengerCarOilPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;