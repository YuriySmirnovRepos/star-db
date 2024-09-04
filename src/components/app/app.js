import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <RandomPlanet /> 

      <div className="column mb2">
        <div className="">
          <ItemList />
        </div>
        <div className="">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;