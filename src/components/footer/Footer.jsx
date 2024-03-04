import React from 'react'
import "./Footer.scss"
import logo from "../../asset/Logo.png"
import { useEffect } from 'react'

import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin,FaYoutube} from 'react-icons/fa'

import Aos from 'aos'
import "aos/dist/aos.css"
const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:1000});
    })
  return (
    <section className="footer">
        <div className="footer__container wrapper">
            <div className="footer__col">
                <img src={logo} alt="img" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nisi enim obcaecati </p>
            </div>
            <div className="footer__col">
                <h3>About</h3>
                <a href="#">About us</a>
                <a href="#">features</a>
                <a href="#">news</a>
            </div>
            <div className="footer__col">
                <h3>Company</h3>
                <a href="#">Cryptocode</a>
                <a href="#">Security</a>
                <a href="#">Rankings</a>
            </div>
            <div className="footer__col">
                <h3>Support</h3>
                <a href="#">FAQs</a>
                <a href="#">support</a>
                <a href="#">contact</a>
            </div>
            <div className="footer__col">
                <h3>Social</h3>
                <div className="footer__icons">
                    <div className="footer__icon">
                        <FaFacebookF/>
                    </div>
                    <div className="footer__icon">
                        <FaInstagram/>
                    </div>
                    <div className="footer__icon">
                        <FaTwitter/>
                    </div>
                    <div className="footer__icon">
                        <FaLinkedin/>
                    </div>
                    <div className="footer__icon">
                        <FaYoutube/>
                    </div>

                </div>
            </div>
        </div>  
    </section>
  )
}

export default Footer