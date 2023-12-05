import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Hella Sad? Hella Mad?</h2>
        <div>
          <div>
            <p>You came</p>
            </div>
          <p>to the right place!</p>
          
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        
      </div>
    </div>
  );
};

export default Hero;
