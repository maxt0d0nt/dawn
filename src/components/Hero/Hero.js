import React from 'react';
import video from '../../assets/amanecer-12689.mp4';
import { Navbar } from '../Navbar/Navbar';
import './Hero.css'

const Hero = () => {

    return (
        <>
            <div className='hero-container'>
                <Navbar />
                <div className='main'>
                    DAWN, donde tu negocio tendra un nuevo amanacer
                    <button data-text="Awesome" class="button">
                        <span class="actual-text">&nbsp;CONOCENOS&nbsp;</span>
                        <span class="hover-text" aria-hidden="true">&nbsp;CONOCENOS&nbsp;</span>
                    </button>
                </div>

                <video width="100%" id="video" autoPlay muted loop>
                    <source src={video} type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
                <div className='capa'></div>
            </div>
        </>
    )
}


export default Hero