import React from 'react';
import logo from './pictures/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IoMdCall } from "react-icons/io";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h3>Bitcon</h3>
            </div>
            <ul className='navbar-links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
    
        </nav>
    );
}

export default Navbar;
