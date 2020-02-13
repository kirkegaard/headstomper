import React from "react";

const Game = props => {
  return (
    <div className="row game">
      <div className="col-12 col-sm-11">
        <h4>{props.title}</h4>
        <div className="content">
          <p>{props.description}</p>
        </div>
        <h5>Tournament starts</h5>
        <div className="content">
          <p>{props.startDate}</p>
        </div>

        <div className="divider" />

        <ul className="list-unstyled list-inline menu">
          {props.rules ? (
            <li className="list-inline-item">
              <a href="https://lowpoly.dk">Rules</a>
            </li>
          ) : null}
          {props.brackets ? (
            <li className="list-inline-item">
              <a href="https://lowpoly.dk">Brackets</a>
            </li>
          ) : null}
          {props.stream ? (
            <li className="list-inline-item">
              <a href="https://lowpoly.dk">Stream</a>
            </li>
          ) : null}
          {props.link ? (
            <li className="list-inline-item">
              <a href={props.link.url}>{props.link.text}</a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Game;
