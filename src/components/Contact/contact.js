import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Faceboook from '../../assets/facebook.png'
import Adobe from '../../assets/adobe.png'
import FaceBookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import YouTubeIcon from '../../assets/youtube.png'
import TwitterIcon from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yox41ev', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have has the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Faceboook} alt="Faceboook" className="clientImg" />
                </div>
            </div>

            <div id="contactPage">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email' />
                    <textarea className='msg' name="message" id="" cols="" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FaceBookIcon} alt="FaceBookIcon" className="link" />
                        <img src={TwitterIcon} alt="TwitterIcon" className="link" />
                        <img src={YouTubeIcon} alt="YouTubeIcon" className="link" />
                        <img src={InstagramIcon} alt="InstagramIcon" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
