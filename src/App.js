import React from 'react';
import Header from './components/Header';
import Tournaments from './components/Tournaments';
import VenueTravel from './components/VenueTravel';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Tournaments />
      <VenueTravel />
    </div>
  );
}

export default App;
