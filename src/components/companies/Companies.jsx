import React from 'react'
import "./Companies.scss"
import {companyInfo} from "../../Data";
//import Aos from "aos"
//import "aos/dist/aos.css";
//import { useEffect } from 'react';



const Companies = () => {
  return (
   <section className="companies">
        <div className="companies__container wrapper" data-aos="fade-up">
           {
             companyInfo.map(({id,img}) => (
                <img src={img} alt='company' key={id}></img>
            ))
           }
        </div>
   </section>
  )
}
export default Companies;