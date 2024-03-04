import React from 'react'
import './Subscribe.scss'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Subscribe = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
  return (
    <section className="subscribe">
        <div className="subscribe__container wrapper">
            <h2 data-aos="fade-up">Subscribe & Get News update</h2>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum beatae recusandae qui, quo modi dolores! Nostrum sunt commodi neque omnis vel reiciendis nihil, exercitationem atque quaerat odio iusto labore?</p>
            <form action="#" data-aos="fade-up">
                <input type="email"placeholder='Write your email here' />
                <a href="index.js" className="btn">Subscribe</a>
            </form>

        </div>
    </section>
  )
}

export default Subscribe