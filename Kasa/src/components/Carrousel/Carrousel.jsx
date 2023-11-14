import React, { useState, useEffect } from 'react';
import left from "../images/arrow-left.png";
import right from "../images/arrow-right.png";

export default function Carrousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const imageCountIndicator = `${currentImageIndex + 1}/${images.length}`;

  const hideArrows = !images || images.length === 1;

  useEffect(() => {
    // Démarre le défilement automatique toutes les 5 secondes
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]);


  return (
    <div className='carrousel-container'>
        {!hideArrows &&(
            <>
      <img className='left' src={left} alt="flèche pour aller à gauche" onClick={handlePrev} />
      <img className='right' src={right} alt="flèche pour aller à droite" onClick={handleNext} />
      </>
      )}
      <img className='carrousel-img' src={images[currentImageIndex]} alt="Image de fond du carrousel" />
      <p className='image-indicator'>{imageCountIndicator}</p>
    </div>
  );
}
