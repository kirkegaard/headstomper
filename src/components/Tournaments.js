import React, { useState } from "react";
import Game from "./Game";

import logo_sfv from "../assets/logos/sfvce.png";
import logo_t7 from "../assets/logos/t7.png";
import logo_samsho from "../assets/logos/samsho.png";
import logo_granblue from "../assets/logos/granblue.png";
import logo_ggxrd from "../assets/logos/ggxrd.png";

import bg_sfv from "../assets/games/streetfighter5.jpg";
import bg_t7 from "../assets/games/tekken7.jpg";
import bg_samsho from "../assets/games/samuraishodown.jpg";
import bg_granblue from "../assets/games/granbluefantasy.jpg";
import bg_ggxrd from "../assets/games/guiltygear.jpg";

const Games = [
  {
    title: "Street Fighter V: Champion Edition",
    description:
      "Again this year we'll be a part of the Capcom Pro Tour. Come earn your points!",
    image: logo_sfv,
    background: bg_sfv,
    startDate: "May 9th 2020",
    links: [
      { title: "Stream", url: "https://www.twitch.tv/capcomfighters" },
      {
        title: "Brackets",
        url:
          "https://smash.gg/tournament/headstomper-2020/events/street-fighter-v-champion-edition/brackets/741579/1191474/"
      }
    ],
    rules: [
      "Double Elimination",
      "2/3 Games per Set",
      "3/5 Games for all Top 8 Sets",
      "Winner must keep character, but may change V-Trigger prior to the losing player selecting their V-Trigger",
      "Losing player may switch character and V-Trigger",
      "Random stage select (players may opt for an agreed stage)",
      "The Grid, Kanzuki Beach, Skies of Honor, and Flamenco Tavern stages are banned from play; if these stages are randomly selected repeat random stage selection process until a tournament legal stage appears",
      "The following costumes are banned: Pyron Gill and Nergigagnte Blanka"
    ]
  },
  {
    title: "Tekken 7",
    description:
      "Want to be a part of the Tekken World Tour? Nows your chance! Come prove your worth!",
    image: logo_t7,
    background: bg_t7,
    startDate: "May 9th 2020",
    links: [
      { title: "Stream", url: "https://www.twitch.tv/tekken" },
      {
        title: "Brackets",
        url:
          "https://smash.gg/tournament/headstomper-2020/events/tekken-7/brackets/741578/1191473/"
      }
    ],
    rules: [
      "Double Elimination",
      "Tournament Mode Default Settings",
      "3/5 Rounds per Game",
      "2/3 Games per Set",
      "3/5 Games for Winners & Losers Finals",
      "3/5 Games for Grand Finals",
      "Random stage select for Game 1",
      "Winner must keep character",
      "Loser may switch stage (with same character) or switch character (with random stage)"
    ]
  },
  {
    title: "Guilty Gear Xrd Rev 2",
    description:
      "Get ready to rock! Get up to burn! Stand up with pride that burns for your desire!",
    image: logo_ggxrd,
    background: bg_ggxrd,
    startDate: "May 9th 2020",
    links: [
      { title: "Stream", url: "https://www.twitch.tv/tekken" },
      {
        title: "Brackets",
        url:
          "https://smash.gg/tournament/headstomper-2020/events/guilty-gear-xrd-rev2/brackets/741583/1191478/"
      }
    ],
    rules: [
      "Double Elimination",
      "Default settings",
      "2/3 Rounds per Game",
      "2/3 Games per Set",
      "3/5 Games for Winners & Losers Finals",
      "3/5 Games for Grand Finals",
      "Winner must keep character",
      "Loser may switch"
    ]
  },
  {
    title: "Samurai Shodown",
    description:
      "Samurai Shodown is back in this stylish fighter! So draw your sword and show us your skills",
    image: logo_samsho,
    background: bg_samsho,
    startDate: "May 9th 2020",
    links: [
      { title: "Stream", url: "https://www.twitch.tv/tekken" },
      {
        title: "Brackets",
        url:
          "https://smash.gg/tournament/headstomper-2020/events/samurai-shodown/brackets/741584/1191479/"
      }
    ],
    rules: [
      "Double Elimination",
      "Default Settings",
      "60 second timer",
      "2/3 Rounds per Game",
      "2/3 Games per Set",
      "3/5 Games for Winners, Losers, and Grand Finals",
      "Winner must keep character",
      "Loser may switch",
      "Random stage select (players may opt for an agreed stage)"
    ]
  },
  {
    title: "Granblue Fantasy Versus",
    description:
      "Are you ready for the brand new fighting game from Arc System Works?",
    image: logo_granblue,
    background: bg_granblue,
    startDate: "May 9th 2020",
    links: [
      { title: "Stream", url: "https://www.twitch.tv/tekken" },
      {
        title: "Brackets",
        url:
          "https://smash.gg/tournament/headstomper-2020/events/granblue-fantasy-versus/brackets/741585/1191480/"
      }
    ],
    rules: [
      "Double Elimination",
      "Default settings",
      "Winner must keep character",
      "Loser may switch",
      "Random stage select (players may opt for an agreed stage)",
      "Additional rules to be set after game release"
    ]
  },
  {
    title: "Side tournaments",
    background: "",
    description:
      "We will announce side tournaments when we get closer to the event. If you got ideas for tournaments please contact <a href='https://twitter.com/ProperNeophos'>Neophos</a>.",
    startDate: "Please check smash.gg for more info",
    rules: [],
    links: [
      {
        title: "For more info",
        url: "https://smash.gg/tournament/headstomper-2020/details"
      }
    ]
  }
];

const Tournaments = () => {
  const [bg, setBg] = useState("");
  const [opacity, setOpacity] = useState(0);
  const onEnter = props => {
    setBg(props);
    setOpacity(0.15);
  };

  const onLeave = () => {
    // setBg(null);
    setOpacity(0);
  };

  return (
    <section className="tournaments">
      <div
        className="wallpaper"
        style={{ backgroundImage: `url(${bg})`, opacity: `${opacity}` }}
      ></div>
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
              <Game onMouseEnter={onEnter} onMouseLeave={onLeave} {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
