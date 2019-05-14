import React, { Component } from 'react'

import Card from "./Card";
import lesson1 from "./lesson-react.json";
import lesson2 from "./lesson-vue.json";

export default class App extends Component {
  render() {
    return (
      <div>
        <Card data={lesson1} />
        <Card data={lesson2} />
      </div>
    )
  }
}
