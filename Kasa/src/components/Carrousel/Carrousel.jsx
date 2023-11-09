import React from 'react';
import data from "../../assets/Location.json";
import left from "../images/arrow-left.png";
import right from "../images/arrow-right.png";


export default function Carrousel() {
    return (
        <div className='carrousel-container'>
            <img className='left' src={left} alt="fléche pour aller à gauche" />
            <img className='right' src={right} alt="fléche pour aller à droite" />
            

        </div>
    )
}