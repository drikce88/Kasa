import React from 'react'; 
import { Link } from 'react-router-dom';
import imageBanner from "../images/banner.png"

export default function banner() {
    return (
        <div className='banner'>
            <img src={imageBanner} alt="banniere avec la photo d'un paysage" />
            <p className='text-overlay'>
                Chez vous, partout et ailleurs
            </p>
        </div>
    )
}