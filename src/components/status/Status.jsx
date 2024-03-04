import React from 'react'
import './Status.scss'
import img from '../../asset/status.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Status = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    })
    return (
        <section className="status">
            <div className="status__container wrapper">
                <div className="status__left" data-aos="zoom-in-up">
                    <h2>Trust us deu to our safe and convient deposit</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illum hic! Deleniti est illo aliquam quod distinctio fuga amet soluta possimus, esse in, doloremque dignissimos illum dolorem, quisquam assumenda optio.
                    </p>
                    <a href="index.js" className="btn">Know More</a>
                </div>
                <div className="status__right" data-aos="fade-left">
                    <img src={img} alt="img" />
                </div>
            </div>
        </section>
    )
}

export default Status;