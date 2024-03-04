import React from 'react'
import "./Navbar.scss";
import logo from '../../asset/Logo.png';
import {IoMenu} from "react-icons/io5";
import {IoMdClose} from "react-icons/io"
import { useState } from 'react';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)
  return (
    <header className="navbar">
        <nav className="navbar__container wrapper">
            <a href="index.js" className="navbar__logo" onClick={()=>setShowNav(false)}>
                <img src={logo} alt="img" />
            </a>
            <ul className={`${showNav ? "show" : ""}`}>
                <li onClick={()=>setShowNav(false)}><a href="index.js">Product</a></li>
                <li onClick={()=>setShowNav(false)}><a href="index.js">Company</a></li>
                <li onClick={()=>setShowNav(false)}><a href="index.js">Pricing</a></li>
                <li onClick={()=>setShowNav(false)}><a href="index.js">Blog</a></li>
            </ul>
            <div className="navbar__btns">
                <a href="index.js">Login</a>
                <a href="index.js" className='btn'>Register</a>
            </div>

            <div className="navbar__menu" onClick={()=>setShowNav(!showNav)}>
                {showNav ? <IoMdClose/> : <IoMenu/>}
            </div>
        </nav>

    </header>
  )
}
export default Navbar;