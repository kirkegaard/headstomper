import React from "react";

import Game from "./Game";
import Games from "../data/games";

const Tournaments = () => {
  return (
    <section className="tournaments">
      <div className="container">
        <h1>
          Tournaments <span className="dot"></span>
        </h1>

        <div className="row">
          {Games.map((data, i) => (
            <div
              key={i}
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-5"
            >
              <Game {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
