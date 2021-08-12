import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

const Header = ()=>{

    const [bool, setBool] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [prop, setProp] = useState(false);
    
    const handleScroll = ()=>{
        const offSet = window.scrollY;
        
        if(offSet > 80){
           
            setScrolled(true);
            
        }
        else{
            setScrolled(false);
            
        }
    
    }

     useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        
    });

    const handleClick = ()=>{
       
        setBool(!bool);
        setProp(!prop);
        
    }

    const handleHamburger = (prop)=>{
        if(prop){
            return 'animate';
        }
        else {
            return 'noAnimate';
        }
    }

   
const handleAnimate = (scrolled)=>{
    if(scrolled){
        return 'scroll';
    }
    else{
        return 'noScroll';
    }
}
   
const handleLinks = ()=>{
    setBool(false);
    setProp(false);
}
    
    return(
        <>
        <header className={`header header-${handleAnimate(scrolled)} `} >
        <div className="container">
            <div className='logo'>
                <h1><LinkS className={`link1 link1-${handleAnimate(scrolled)}`} to="hero"> OdPortfolio</LinkS></h1>
            </div>
             <div className="navbar">
                <ul className="nav-links">
                    <li className="links">
                    <LinkS spy={true} smooth={true} offset={-70} duration={500}
                     to="about" className={`link link-${handleAnimate(scrolled)}`}>About</LinkS></li>
                    <li className="links">
                    <LinkS spy={true} smooth={true} offset={-70} duration={500}
                     to="projects" className={`link link-${handleAnimate(scrolled)}`}>Projects</LinkS></li>
                    <li className="links"><LinkS spy={true} smooth={true} offset={-70} duration={500}
                     to="contact" className={`link link-${handleAnimate(scrolled)}`}>Contact</LinkS></li>
                </ul>
            </div>
    
            
            <div className="hamburger" onClick={handleClick}>
                <span className={`line line1-${handleHamburger(prop)}`}></span>
                <span className={`line line2-${handleHamburger(prop)}`}></span>
                <span className={`line line3-${handleHamburger(prop)}`}></span>
            </div>
            </div>
            {bool &&
            <div className="hidden-nav">
                 <ul className="nav-links1">
                    <li className="links"><LinkS onClick={handleLinks} spy={true} smooth={true} offset={-70} duration={500}
                     to="about" className={`link link-${handleAnimate(scrolled)}`}>About</LinkS></li>
                    <li className="links"><LinkS onClick={handleLinks} spy={true} smooth={true} offset={-70} duration={500}
                     to="projects" className={`link link-${handleAnimate(scrolled)}`}>Projects</LinkS></li>
                    <li className="links"><LinkS onClick={handleLinks} spy={true} smooth={true} offset={-70} duration={500}
                     to="contact" className={`link link-${handleAnimate(scrolled)}`}>Contact</LinkS></li>
                </ul>
            </div>}

            
        </header>
        </>
    );
}

export default Header;