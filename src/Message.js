import React, { Component } from 'react'

export default class Message extends Component {
  state = {
    title: 'State Change',
    text: 'Say Hi',
  }
  // sayHi = () => {
  //   this.setState({
  //     text: 'Hi Yo',
  //   });
  // }
  constructor(props) {
    super(props);
    this.sayHi = this.sayHi.bind(this);
  }
  sayHi() {
    this.setState({
      text: 'Hi Yo',
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.text}</h3>
        <button onClick={this.sayHi}>Change</button>
      </div>
    )
  }
}
