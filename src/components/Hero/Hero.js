import React from "react";
import video from "../../assets/amanecer-12689.mp4";
import Logo from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <Navbar />
        <div className="main">
          <div>
            <Logo />
          </div>
          <h2>Donde tu negocio tendra un nuevo amanacer</h2>
          <br></br>
          <button data-text="Awesome" className="button">
            <span className="actual-text">&nbsp;CONOCENOS&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;CONOCENOS&nbsp;
            </span>
          </button>
        </div>

        <video width="100%" id="video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="capa"></div>
      </div>
    </>
  );
};

export default Hero;
