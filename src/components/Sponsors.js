import React from "react";

import bandai_namco from "../assets/sponsors/bandai_namco.png";
import capcom from "../assets/sponsors/capcom.png";
import coma from "../assets/sponsors/coma.png";
import cph_esport from "../assets/sponsors/cph_esport.png";
import webhallen from "../assets/sponsors/webhallen.png";

const sponsors = [
  {
    title: "Bandai Namco",
    logo: bandai_namco,
    link: "https://en.bandainamcoent.eu"
  },
  {
    title: "Capcom",
    logo: capcom,
    link: "https://capcom.com"
  },
  {
    title: "CoMa FGC",
    logo: coma,
    link: "https://www.twitch.tv/comafgc"
  },
  {
    title: "Copenhagen Esport",
    logo: cph_esport,
    link: "https://cph-esport.dk/fighting-games/"
  },
  {
    title: "Webhallen",
    logo: webhallen,
    link: "https://webhallen.com/"
  }
];

const shuffle = arr => {
  return arr.sort(() => Math.random() - 0.5);
};

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="container">
        <h1>
          Sponsors <span className="dot"></span>
        </h1>
        <div className="row">
          <div className="col logos text-center">
            {shuffle(sponsors).map((s, i) => (
              <a key={i} className="d-block d-sm-inline-block mr-4 mb-4" href={s.link}>
                <img alt={s.title} src={s.logo} className="img-fluid" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
