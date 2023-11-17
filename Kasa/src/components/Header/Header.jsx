import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo-kasa.png";

export default function Header() {
    return (
        <header className='header'>
            <div className='logokasa'>
                <img src={logo} alt="logo kasa"/>
            </div>
            <nav className='navlink'>
                <NavLink to="/" className="link" >
                    Accueil
                </NavLink>
                <NavLink to="/About" className="link" >
                    À Propos
                </NavLink>
            </nav>
        </header>
    )
}
