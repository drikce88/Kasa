import React from 'react';
import Location from '../../assets/Location.json';
import Dropdown from '../Dropdown/Dropdown.jsx';
import Host from '../Host/Host.jsx';
import Rating from '../Rating/Rating.jsx';

export default function Description({ id }) {
  // Récupérer les détails du logement spécifique en fonction de l'ID
  const logementDetails = Location.find((logement) => logement.id === id);

  return (
    <article className='description-bloc'>
      <h1 className='title'>{logementDetails.title}</h1>
      <h2 className='location'>{logementDetails.location}</h2>
      <div className='tags'>
        {logementDetails.tags.map((tag, index) => (
          <div key={index} className='tag'>{tag}</div>
        ))}
      </div>
      <Host id={id} />
      <Rating id={id} />
      <div className='dropdown-bloc'>
      <Dropdown title="Description" content={[logementDetails.description]} />
      <Dropdown title="Équipements" content={
        <ul>
            {logementDetails.equipments.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
      </ul>
      } />
      </div>
     

    </article>
  );
}
