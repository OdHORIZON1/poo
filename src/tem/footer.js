import React from 'react'
import '../css/footer.css'
import { Link as Link } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import emailjs from 'emailjs-com';

const Footer = ()=>{
    

     const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_32v3vre', 'template_1jnnmof', e.target, 'user_UeL7DJM67Khg6SfSoCeGh')
        .then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
        e.target.reset();
    }
    return(
        <section className="footer">
            <div className="footer-c">
                
                <div className="d1">
                    <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign up to receive our latest projects</h1>
                        <input type="text" name="email" placeholder="Email"
                            onChange className="footer-email"
                        />
                    </form>
                    </div>
                    <div className="navigate">
                        <h1>Navigate</h1>
                        <LinkS spy={true} smooth={true} offset={-70} duration={500}
                         to="about" className="nav-link">About</LinkS>
                        <LinkS spy={true} smooth={true} offset={-70} duration={500}
                         to="projects" className="nav-link">Projects</LinkS>
                        <LinkS spy={true} smooth={true} offset={-70} duration={500}
                         to="contact" className="nav-link">Contact</LinkS>
                    </div>
                </div>
                <div className="d2">
                    <div className="soc soc-bottom soc-right soc2"><i class="fab fa-facebook"></i></div>
                    <div className="soc soc-top soc-right soc1"><i class="fab fa-instagram"></i></div>
                    <div className="soc soc-bottom soc-right soc2"><i class="fab fa-linkedin-in"></i></div>
                    <div className="soc soc-top soc-right soc1"><i class="fab fa-github"></i></div>
                </div>
                <div className="d3">
                    <h1>2021 &copy; Driss Ouardi, All rights reserved</h1>
                </div>
            </div>
        </section>
    );
}

export default Footer;