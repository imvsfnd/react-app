import React, { Component } from 'react'
import Item from './Item'

export class List extends Component {

  render() {
    const steps = [
      'react',
      'vur',
      'pure javascript',
      'basic',
    ]
    return (
      <div>
        {steps.map((text, idx, array) => <Item>{text}({idx})</Item>)}
      </div>
    )
  }
}

export default List
