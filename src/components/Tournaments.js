import React from 'react';

import Game from './Game';
import Games from '../data/games';

import './Tournaments.scss';

const Tournaments = () => {
  return (
    <section className="section tournaments is-medium is-dark">
      <div className="container">

        <h2 className="has-text-weight-bold is-uppercase is-size-1 has-margin-bottom-1">
          Tournaments <span className="dot"></span>
        </h2>

        <div className="columns is-multiline">
          { Games.map((data, i) => (
            <div key={i} className="column is-4-desktop is-6-tablet has-margin-bottom-1">
              <Game {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tournaments;