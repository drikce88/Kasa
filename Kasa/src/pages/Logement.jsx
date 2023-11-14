import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Carrousel from "../components/Carrousel/Carrousel.jsx";
import data from "../assets/Location.json";
import Description from "../components/Description/Description.jsx";

const Logement = () => {
  const { id } = useParams();

  // Recherche du logement spécifique en fonction de l'ID
  const logementDetails = data.find((logement) => logement.id === id);

  if (!logementDetails) {
    // Gérer le cas où aucun logement n'est trouvé pour l'ID donné
    return <p>Logement introuvable</p>;
  }

  return (
    <>
      <Header />
      <Carrousel images={logementDetails.pictures} />
      <Description />
    </>
  );
};

export default Logement;





