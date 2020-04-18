import React, { Component } from 'react';
import '../App.css';



class Item extends Component {

  render(props) {
    return(

      <div className='item'>
        <li>
          <p>{this.props.address}</p>
        </li>
      </div>
    )
  }

}

export default Item;
