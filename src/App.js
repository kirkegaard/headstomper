import React from "react";
import Header from "./components/Header";
import Tournaments from "./components/Tournaments";
import VenueTravel from "./components/VenueTravel";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Tournaments />
      <VenueTravel />
    </React.Fragment>
  );
};

export default App;
