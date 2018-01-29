import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      counter: 0,
      comments: ['What The?', 'Yuh', 'hype']
    }
  }
  handleClick (e) {
    // setState is inherited from the Component class
    this.setState({
      counter: this.state.counter + 1
    })
  }
  // what should the component render
  render() {
    // Make sure to return some UI
  return (
    <div className="Yo">
    <h1>Who is {this.props.name} </h1>
    {/* <p className="intro">I am Steve Nash</p> */}

      <button onClick={(e) => this.handleClick(e)}>upvote!</button>

    <p>The initial count is {this.state.counter} </p>

    <p>The Comments: {this.state.comment}</p>


  </div>

  )
}
}


export default App;
