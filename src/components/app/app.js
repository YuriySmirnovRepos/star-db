import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';


class App extends React.Component {

  state = {
    selectedPerson: null
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <RandomPlanet /> 

        <div className="column mb2">
          <div className="">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="">
            <PersonDetails personId = {this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
};

export default App;