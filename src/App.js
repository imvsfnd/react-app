import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 1,
  }
  onClick() {

  }
  render() {
    return (
      <div className="App">
        <img src="{logo}" className="App-logo" alt="logo" />
        <input type="text" />
        <input type="checkbox" id="check" onChange />
        <label htmlFor="check"></label>
        <button onClick={this.onClick}>{this.state.count}</button>
      </div>
    );
  }
}

export default App;


/*
1.must close <a href=""></a>, <p></p>
2.self close <input type="type"/>, <img src="" alt=""/>, <div class=""/>
3.駝峰式命名 class/For > className/htmlFor
4.駝峰式命名 onchange / onclick > onChange/onClick
5.onClick={值或表達式}
*/