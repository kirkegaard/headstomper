import React from 'react';
import Game from './Game';

import Games from '../data/games';

const Tournaments = () => {
  return (
    <section className="container">
      <h2>Tournaments</h2>
      { Games.map((data, i) => (
        <Game key={i} {...data} />
      ))}
    </section>
  );
}

export default Tournaments;