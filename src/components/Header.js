import React from "react";
import poster from "../assets/images/header.jpg";
import video from "../assets/videos/header-stomper.mp4";
import logo from "../assets/logos/headstomper.png";

const Header = () => {
  return (
    <header className="d-flex w-100 h-100 mx-auto flex-column">
      <div className="fullscreen">
        <video loop muted autoPlay poster={poster} src={video} className="video" />
      </div>
      <div className="fullscreen"></div>
      <nav className="mb-auto">&nbsp;</nav>
      <div className="main mx-auto text-center mb-auto">
        <img className="logo img-fluid" src={logo} alt="Headstomper logo" />
        <h2 className="subtitle">May 8-10, 2020</h2>
        <a href="https://smash.gg/tournament/headstomper-2020/register" className="btn btn-primary btn-lg">
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
