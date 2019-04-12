import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 1,
  };
  addCount = () => {
    this.setState({
      count: this.state.count+1
    });
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>Add</button>
      </div>
    );
  }
}

export default App;
