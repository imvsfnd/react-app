import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0,
  }
  addCount = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      }
    })
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>+1</button>
      </div>
    )
  }
}