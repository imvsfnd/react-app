import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0,
  }
  addCount = () => {
    this.setState(
      {
      count: this.state.count + 1,
      },
      () => {
        this.sendCOunt();
      };
    );
  };
  sendCount = () => {
    fetch(`/api/count?vallue=${this.state.count}`);
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>+1</button>
      </div>
    )
  }
}