import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      counter: 0,
      comments: ['What The?', 'Yuh', 'hype', 'oh'],
      body: "Hello Welcome to your blog bitches"
    }
    this.edit = this.edit.bind(this);
  }
  handleClick (e) {
    // setState is inherited from the Component class
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  edit (e) {
    e.preventDefault();
    let body = prompt("Enter new Boday");
    this.setState({
      body:body
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
    <h1>Body: {this.state.body} </h1>
    <button onClick={this.edit}>Edit!</button>



    <p>The initial count is {this.state.counter} </p>

  <button onClick={(e) => this.handleClick(e)}>upvote!</button>
    <h1>The Comments:</h1>
    <p>{this.state.comments.map(function(comment){
      return <Comment body={comment} />
    })}
    </p>



  </div>

  )
}
}


export default App;
