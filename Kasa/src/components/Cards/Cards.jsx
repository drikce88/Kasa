import React from 'react';



export default function Cards({ cover, title }) {
	return (
	  <article className="card">
		<img className="card-img" src={cover} alt="location" />
		<p className="location-title">{title}</p>
	  </article>
	);
  }