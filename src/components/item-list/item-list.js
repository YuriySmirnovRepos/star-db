import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({ peopleList });
      });
  }

  renderItems(arr) {
    return arr.map(({url, name}) => {
      const regEx = /\d+/gm;
      const idNum = regEx.exec(url);
      const id = idNum[0];
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <span>Loading...</span>;
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}