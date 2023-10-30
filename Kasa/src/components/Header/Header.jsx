import React from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from "../images/logo-kasa.png";

export default function Header() {
    return (
        <header className='header'>
            <div className='logokasa'>
                <img src={logo} alt="logo kasa"/>
            </div>
            <nav className='navlink'>
                 <Link to="/" className="link">
                    Accueil
                </Link>
                <Link to="/About" className="link">
                    À Propos
                </Link>
            </nav>
        </header>
    )
}