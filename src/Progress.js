import React, { Component } from 'react'
import ProgressBar from "./ProgressBar";

export default class Progress extends Component {
    state = {
        value: 0,
    }
    addValue = () => {
        this.setState({
            value: this.state.value + 60,
        })
    }
  render() {
      const {value} = this.state;
    return (
      <div>
        <ProgressBar value={value}></ProgressBar>
        <button onClick={this.addValue}>Add Progress</button>
      </div>
    )
  }
}
