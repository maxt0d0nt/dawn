import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import logo from "../../assets/dawnballs-removebg-preview.png"

import './Navbar.css';

export const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false)

  const [header, setHeader] = useState(false)

  let changebackgrond = () => {
    if (window.scrollY > 0) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', changebackgrond);
  return (
    <div className='navbarHero'>
      <div className={header ? 'header active' : 'Nav'}>
        <div className='logo'>
            <img src={logo} alt="logo" className='logoDawn'/>
            <spam className="logoName">Design and Analitics Web Nexus</spam>
        </div>
        <ul className={isMobile ? 'nav-link-mobile' : 'navMenu'}>
          <div className='link'>
            ¿QUIEN SOMOS?
          </div>
          <div className='link'>
           DISEÑO WEB
          </div>
          <div className='link'>
          DISEÑO UX
          </div>
          <div className='link'>
            CONTACTO
          </div>
        </ul>
        <button className='mobile-menu-icon'>
          {isMobile ? (
            <i className='fas fa-times' onClick={() => setIsMobile(false)}>
              <RiCloseFill />
            </i>
          ) : (
            <i className='fas fa-bars' onClick={() => setIsMobile(true)}>
              <FaBars />
            </i>
          )}
        </button>
      </div>
    </div>
  )
}