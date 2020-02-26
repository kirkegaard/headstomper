import React from "react";
import logo from "../assets/logos/headstomper.png";

const Header = () => {
  return (
    <header className="d-flex w-100 h-100 mx-auto flex-column">
      <div className="wallpaper"></div>
      <nav className="mb-auto">&nbsp;</nav>
      <div className="main mx-auto text-center mb-auto">
        <img className="logo img-fluid" src={logo} alt="Headstomper logo" />
        <h2 className="subtitle">8-10 May 2020</h2>
        <a href="https://smash.gg/tournament/headstomper-2020/register" className="btn btn-primary btn-lg">
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
