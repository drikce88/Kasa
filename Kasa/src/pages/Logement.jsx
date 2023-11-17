import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Carrousel from "../components/Carrousel/Carrousel.jsx";
import data from "../assets/Location.json";
import Description from "../components/Description/Description.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Error from "../pages/Error.jsx";


const Logement = () => {
  const { id } = useParams();

  // Recherche du logement spécifique en fonction de l'ID
  const logementDetails = data.find((logement) => logement.id === id);

  return !logementDetails ? (
    <Error />
  ) : (
    <>
      <Header />
      <Carrousel images={logementDetails.pictures} />
      <Description id={id} />
      <Footer />
    </>
  );
};

export default Logement;
