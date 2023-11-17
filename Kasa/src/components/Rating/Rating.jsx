import React from 'react';
import Location from '../../assets/Location.json';
import starActive from "../images/star-active.png";
import starInactive from "../images/star-innactive.png";

export default function Rating({ id }) {
  // Récupérer les détails du logement spécifique en fonction de l'ID
  const logementDetails = Location.find((logement) => logement.id === id);

  // Convertir la note en nombre entier
  const rating = parseInt(logementDetails.rating);

  // Générer les étoiles en fonction de la note
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img className='rate'
      key={index}
      src={index < rating ? starActive : starInactive}
      alt={index < rating ? "étoile colorée" : "étoile grise"}
    />
  ));

  return <div className='rating-container'>{stars}</div>;
}
