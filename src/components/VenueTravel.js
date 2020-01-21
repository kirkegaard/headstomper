import React from 'react';

import data from '../data/venuetravel';

console.log(data['venue']);

const VenueTravel = () => {
  let { venue, travel } = data;

  return (
    <section className="container">
      <div className="col">
        <h2>Venue</h2>
        <p>{venue.desc}</p>
      </div>
      <div className="col">
        <h2>Travel</h2>
        <p>{travel.desc}</p>
        <h2>Directions</h2>
        { travel.directions.map((data, i) => (
          <div key={i}>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VenueTravel;