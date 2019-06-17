import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div>
        <li>{this.props.children}</li>
      </div>
    )
  }
}

export default Item
