import React from 'react'
import "./Hero.scss"
import Mob from "../../asset/Mob.png"
 import Aos from "aos"
import "aos/dist/aos.css"
 import { useEffect } from 'react';


const Hero = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    });
  return (
    <section className="hero">
        <div className="hero__container wrapper">
            <div className="hero__left" data-aos="fade-right">
                <img src={Mob} alt="img" />
            </div>
            <div className="hero__right" data-aos="zoom-in-up">
                <h1>Make easier your crypto transaction</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis pariatur id alias officia nihil quidem assumenda itaque sunt, eos totam natus voluptates facilis hic, accusamus maxime sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem laudantium quibusdam quia quisquam impedit dolorum! Ipsum ex illo cumque blanditiis repudiandae nostrum, accusantium alias sunt cupiditate, expedita ipsa deserunt!
                </p>
                <a href="index.js" className="btn">TRY FOR FREE</a>
            </div>
        </div>
    </section>
  )
}
export default Hero;