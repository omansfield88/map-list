import React, { Component } from 'react';
import '../App.css';



class Item extends Component {

  render(props) {
    return(

      <div className='item'>
        <li>
          <p>{this.props.address}</p>
        </li>
        <p>{process.env.REACT_APP_ZOOPLA_API_KEY}</p>
      </div>
    )
  }

}

export default Item;
