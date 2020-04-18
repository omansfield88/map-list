import React, { Component } from 'react';
import '../App.css';
import Item from './Item';



class List extends Component {

  state = {
    addresses : [
      '3 Robert Allan Way',
      '54 Eaton Gardens',
      '1a Vanbrugh Hill',
        '123 fake street'
    ],
    name: 'Oliver'
  }

  displayItems = () => {
    return (
        this.state.addresses.map ((address, i) =>
        <Item address={address}/>
      )
    )
  }




  render() {

    return (
      <div className="list">

        <p>List component</p>

        <ul>
          {this.displayItems()}
        </ul>

      </div>
    );
  }
}

export default List;
