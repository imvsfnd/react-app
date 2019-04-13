import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
  render() {
    return (
      <ol>
        <Item text="Learn Javascript" price={100}>thisPropsChildren</Item>
        <Item text="Learn Javascript" price="100">Learn React</Item>
        <Item text="Make More" price={500}>Again thisPropsChildren</Item>
      </ol>
    )
  }
}
