import React from "react";

const Header = () => {
  return (
    <div className="d-flex w-100 h-100 mx-auto flex-column header">
      <nav className="mb-auto">
        <div>navigation...</div>
      </nav>
      <div className="main mx-auto text-center mb-auto">
        <h1 className="title">Headstomper</h1>
        <h2 className="subtitle">8-10 May 2020</h2>
        <button className="btn btn-primary btn-lg">Register</button>
      </div>
    </div>
  );
};

export default Header;
