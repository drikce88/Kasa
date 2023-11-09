import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";

const Logement = () => {
  // Récupère les paramètres de l'URL, y compris l'ID
  const { id } = useParams();

  // Utilise l'ID pour récupérer les détails du logement depuis le fichier JSON 
  
  const logementDetails = {
    
    id: id,
    title: "Titre du logement",
    description: "Description du logement",
    
  };

  return (
    <>
    <Header />
    
    </>
  );
};

export default Logement;
