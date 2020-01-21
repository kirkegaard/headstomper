import React from 'react';

const Game = (props) => {
  return (
    <article className="container">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <h4>Tournament starts</h4>
      <p>{props.startDate}</p>
      <ul>
        {props.rules ? <li><a href="//ddd">Rules</a></li> : null}
        {props.brackets ? <li><a href={props.brackets}>Brackets</a></li> : null}
        {props.stream ? <li><a href={props.stream}>Stream</a></li> : null}
        {props.link ? <li><a href={props.link.url}>{props.link.text}</a></li> : null}
      </ul>
    </article>
  );
}

export default Game;