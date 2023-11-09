import React from 'react';
import data from "../../assets/Location.json";
import { Link } from "react-router-dom"



export default function Cards() {
    return (
      <div className='card-container'>
        {data.map((location) => (
          <Link to={`/logement/${location.id}`} key={location.id}>
            <div className='card'>
              <img src={location.cover} alt={location.title} className='card-img' />
              <p className='location-title'>{location.title}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }