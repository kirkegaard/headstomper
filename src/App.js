import React from "react";
import Header from "./components/Header";
import Tournaments from "./components/Tournaments";
import VenueTravel from "./components/VenueTravel";
import Contact from "./components/Contact";
import Sponsors from "./components/Sponsors";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Tournaments />
      <VenueTravel />
      <Sponsors />
      <Contact />
    </React.Fragment>
  );
};

export default App;
