import React from 'react';
import Location from '../../assets/Location.json';


export default function Host({ id }) {
    // Récupérer les détails du logement spécifique en fonction de l'ID
    const logementDetails = Location.find((logement) => logement.id === id);

    return (
        <div className='host-containeur'>
            <p className='name'>{logementDetails.host.name} </p>
            <img className='host-img' src={logementDetails.host.picture} alt="photo du bailleur" />
        </div>
    )
 }
