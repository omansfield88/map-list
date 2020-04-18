import React, { Component } from 'react';
import '../App.css';
import List from './List';
import Button from './Button';
import SetStateHook from './SetStateHook';



class Page extends Component {

  state = {
    title: 'This is a title'
  }

  setNewTitle = () => {
    this.setState({title: 'New title'})
  }

  render() {
    return (
      <div className="home-page">
        <p>{this.state.title}</p>
        <List />
        <Button label='Change title' handleClick={this.setNewTitle}/>
        <SetStateHook />
      </div>
    );
  }
}

export default Page;
