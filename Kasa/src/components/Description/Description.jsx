import React from 'react';
import Location from "../../assets/Location.json";
import Dropdown from "../Dropdown/Dropdown.jsx";

export default function Description({ id }) {
  // Récupérer les détails du logement spécifique en fonction de l'ID
  const logementDetails = Location.find((logement) => logement.id === id);

  if (!logementDetails) {
    // Gérer le cas où aucun logement n'est trouvé pour l'ID donné
    return <p>Logement introuvable</p>;
  }

  return (
    <article>
      <h1>{logementDetails.title}</h1>
      <h2>{logementDetails.location}</h2>
      <Dropdown />
    </article>
  );
}
