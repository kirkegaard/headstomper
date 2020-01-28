import React from 'react';

const Game = (props) => {
  return (
    <div className="columns">
      <div className="column is-10">
        <h3 className="is-size-4 has-text-weight-bold has-margin-bottom-7">{props.title}</h3>
        <div className="content">
          <p>{props.description}</p>
        </div>
        <h4 className="has-text-weight-bold is-size-5">Tournament starts</h4>
        <div className="content">
          <p>{props.startDate}</p>
        </div>

        <div className="divider has-margin-bottom-6" />

        <div className="level is-mobile">
          <div className="level-left">
            { props.rules ?
              <a className="level-item is-size-5 has-text-weight-bold" href="https://lowpoly.dk">Rules</a>
              : null
            }
            { props.brackets ?
              <a className="level-item is-size-5 has-text-weight-bold" href="https://lowpoly.dk">Brackets</a>
              : null
            }
            { props.stream ?
              <a className="level-item is-size-5 has-text-weight-bold" href="https://lowpoly.dk">Stream</a>
              : null
            }
            { props.link ?
              <a className="level-item is-size-5 has-text-weight-bold" href={props.link.url}>{props.link.text}</a>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;