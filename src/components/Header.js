import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <section className="hero is-black is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-uppercase has-text-weight-bold is-size-1">
            Headstomper
          </h1>
          <h2 className="subtitle">
            8-10 May 2020
          </h2>
          <button className="button is-primary is-large">Register</button>
        </div>
      </div>
    </section>
  );
}

export default Header;