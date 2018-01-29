import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      counter: 0,
      comments: ['What The?', 'Yuh', 'hype', 'oh']
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
      <h1> Blog </h1>
    <h1>Who is Author: {this.props.author} </h1>
    <p>Title: {this.props.title} </p>
    <p>Body: {this.props.body} </p>

      <button onClick={(e) => this.handleClick(e)}>upvote!</button>

    <p>The initial count is {this.state.counter} </p>

    <p>The Comments:</p>
    <p>{this.state.comments.map(function(comment){
      return <Comment body={comment} />
    })}
    </p>



  </div>

  )
}
}


export default App;
