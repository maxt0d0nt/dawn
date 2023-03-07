import React from "react";
import "./Logo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import DawnBalls from "../../desingComponents/dawnBalls/DawnBalls";

const Logo = () => {
  AOS.init({
    delay: 300,
    duration: 3000,
  });

  return (
    <>
      <div className="circulo">
        <div className="circle-logo" data-aos="fade-left">
          <DawnBalls />
        </div>
        <div className="title">
          <p data-aos="fade-up">D A W N</p>
        </div>
      </div>
    </>
  );
};

export default Logo;
