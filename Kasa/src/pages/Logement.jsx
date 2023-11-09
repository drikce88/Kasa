import React from "react";
import { useParams } from "react-router-dom";

const Logement = () => {
  // Récupère les paramètres de l'URL, y compris l'ID
  const { id } = useParams();

  // Utilise l'ID pour récupérer les détails du logement depuis ton fichier JSON ou tout autre endroit où tu stockes les données
  // Remplace cette partie avec la logique appropriée pour récupérer les données du logement
  const logementDetails = {
    // Remplace ces valeurs par les vraies données du logement
    id: id,
    title: "Titre du logement",
    description: "Description du logement",
    // ... autres détails du logement
  };

  return (
    <div>
      <h1>{logementDetails.title}</h1>
      <p>{logementDetails.description}</p>
      {/* Affiche d'autres détails du logement selon tes besoins */}
    </div>
  );
};

export default Logement;
