import React from "react";

const Game = props => {
  return (
    <div className="row">
      <div onMouseEnter={() => props.onMouseEnter(props.background)} onMouseLeave={() => props.onMouseLeave()} className="col-12 col-sm-11 game">
        <h4>{props.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
        <h5>Tournament starts</h5>
        <div className="content">
          <p>{props.startDate}</p>
        </div>

        <div className="divider" />

        <ul className="list-unstyled list-inline menu">
          {props.links.map((l, i) => (
            <li key={i} className="list-inline-item">
              <a href={l.url}>{l.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
