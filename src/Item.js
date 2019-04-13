import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <li>{this.props.text} {this.props.price+1} {this.props.children}</li>
      </div>
    )
  }
}
