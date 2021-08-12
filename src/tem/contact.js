import React from 'react';
import '../css/contact.css';
import emailjs from 'emailjs-com';


const Contact = ()=>{

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_32v3vre', 'template_7ikhrhf', e.target, 'user_UeL7DJM67Khg6SfSoCeGh')
        .then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
        e.target.reset();
    }
    return(
        <section className="cont" id="contact">
        <div className="cont-c">
        <span className="con-title">
            Contact
        </span>
            <form className="contact-form" onSubmit={handleSubmit}>
            <span className="em">
                <input type="text" className="ema" placeholder="Subject" name='subject'/>
            </span>
            <span className="em">
                <input type="text" className="ema" placeholder="Email" name='email'/>
            </span>
            <span className="nam">
                <span className="f-name">
                    <input type="text" className="fir" placeholder="First name" name='first-name'/>
                </span>
                <span className="l-name">
                    <input type="text" className="las" placeholder="Last name" name='last-name'/>
                </span>
            </span>
            <span className="mess">
            <textarea className="me" name="" id="" cols="46" rows="12" placeholder="Message" name='message'>
                    
            </textarea>
                
            </span>
            <span className="cont-btn">
                <button type="submit" className="send-btn">
                      <span className="te">Send</span>
                      <span className="fon"><i class="fas fa-paper-plane"></i></span>
                </button>
            </span>
                
            </form>
        </div>
        </section>
        
    );
} 

export default Contact;