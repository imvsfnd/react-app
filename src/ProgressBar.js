import React, { Component } from 'react'

export default class ProgressBar extends Component {
  render() {
      const {value} = this.props;
    return (
      <div>
        <div className="bar-outer">
            <div className="bar-inner" style={{width:`${value}%`}}></div>
            <span className="bar-info">{value}%</span>
        </div>
      </div>
    )
  }
}
