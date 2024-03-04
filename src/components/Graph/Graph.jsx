import React from 'react'
import './Graph.scss'
import img from '../../asset/earnings.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Graph = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    });
  return (
    <section className="earnings">
        <div className="earnings__container wrapper">
            <div className="earnings__left" data-aos="fade-right">
                <img src={img} alt="img" />
            </div>
            <div className="earnings__right" data-aos="zoom-in-up">
                <h2>Track your earnings and cruptocode made it easy</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente error rerum pariatur, qui tempora labore ea alias nesciunt libero, veniam consequatur, itaque vitae quas corrupti adipisci delectus accusamus dolor eveniet?</p>
                <a href="index.js" className="btn">Get Started</a>
            </div>
        </div>

    </section>
  )
}

export default Graph