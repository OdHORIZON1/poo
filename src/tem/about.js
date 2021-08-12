import React from 'react';
import '../css/about.css';
import imag from '../img.jpg'


const About = ()=>{
    return(
        <section className="about-container" id="about">
            <h1 className="about-h1">About </h1>
            <div className="articles">
            <article className="a1"><div className="info">
            <div className="in">
               <h1 className="title">Hello</h1> 
            </div>
            <div className="para">
                My name is Driss OUARDI, I'm a full Stack Web Developer, I started 
                in 2012, Passionate about creating interactive web applications and webSites,
                Currently working at Freelancer.com as a Web Developer.
            </div>
            <div className="cv-div">
                <button className="cv-btn">
                    View my Cv
                </button>
            </div>
            </div>
            
            </article>
            <article className="a2">
            <div className="cv-image">
            <img src={imag} alt="" />
            </div>
                
            </article>
            </div>
            
            
        </section>
    );
}

export default About;