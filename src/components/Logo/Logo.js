import React from "react";
import "./Logo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import lo from "../../assets/dawnballs-removebg-preview.png";

const Logo = () => {
  AOS.init({
    delay: 300,
    duration: 3000,
  });

  return (
    <>
      <div className="circulo">
        <img src={lo} alt="lo" className="lo" data-aos="fade-right" />
        <div className="title">
          <p data-aos="fade-up">D A W N</p>
        </div>
      </div>
    </>
  );
};

export default Logo;
