import Reactt from 'react';
import { Link as Link } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

const Hero = ()=>{
    return(
<section className="hero-c" id="hero">
        <h1 className="hero-h1">Driss Ouardi</h1>
        <h2 className="hero-h2">Web Developer</h2>

        <div className="contact-div">
            <LinkS spy={true} smooth={true} offset={-70} duration={500}
            to="contact" className="contact-btn">
                Contact
            </LinkS>
        </div>
</section>
    );
}

export default Hero;