import React from'react';
import logoFooter from "../images/logo-footer.png";



export default function Footer () {
    return (
        <footer className='footer'>
                <img src={logoFooter} alt="" />
                <div className='footer-txt'>
                    <p><span></span>2020 Kasa. All rights reserved</p>   
            </div>
        </footer>
    )
}