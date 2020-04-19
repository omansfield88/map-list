import React, { Component } from 'react';
import '../App.css';
import Item from './Item';



class List extends Component {

  state = {
    listing: []
  }

  componentDidMount() {
    //Send API request
    //Convert response data to json
    //Set new state by creating a newState array, mapping over the data.listing array then using that array to setState
    const url = `http://api.zoopla.co.uk/api/v1/property_listings.js?lat_min=53.369653&lat_max=53.388398&lon_min=-2.907952&lon_max=-2.950458&radius=1&api_key=${process.env.REACT_APP_ZOOPLA_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then( (data) => {
          const newState = [];
          data.listing.map((property) => newState.push(property) );
          this.setState({
            listing: newState
          })
        }
      )

      .catch( (error) => { console.log('fucking whoops') } )
  }

  displayItems = () => {
    return (
        this.state.listing.map ((listing, i) =>
        <Item address={listing.displayable_address}/>
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
