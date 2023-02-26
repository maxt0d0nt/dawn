import React, { useEffect, useRef } from 'react';
import './About.css';
import { gsap } from "gsap";
import { SplitTextJS } from 'split-text-js'

const About = () => {
let app = useRef(null)

   useEffect(() => {
    
    const titles = gsap.utils.toArray(app);
    const tl = gsap.timeline();
 

    titles.forEach(element => {
        
        const splitTitle = new SplitTextJS(titles);
        
        tl 
        
        .from(splitTitle.chars, {
            opacity:0,
            y:80,
            rotateX: -90,
        }, "<")
    
        .to(splitTitle.chars, {
            opacity:0,
            y: -80,
            rotateX: 90,
        }, "<1")
    })

   })
  
    
    
    return (
        <>
            <div className='container-about'>
                <div className='wrapper'>
                    <p ref={el => app = el}>DESIGN WEB</p>
                    <p ref={el => app = el}>DESIGN UX</p>
                    <p ref={el => app = el}>ANALITYCS</p>
                    <p ref={el => app = el}>DATA ANALITYCS</p>
                </div>
            </div>
        </>
    )
}

export default About