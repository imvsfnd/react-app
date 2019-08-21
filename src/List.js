import React, { Component } from 'react'
import Item from './Item'

export class List extends Component {
  state = {
    list: [
      { label: 'name', data: 'React Lesson' },
      { label: 'price', data: '3200' },
      { label: 'videos', data: '60' },
      { label: 'teacher', data: 'scars' },
    ],
  };
  removeFirst = () => {
    this.setState({
      list: this.state.list.slice(1),
    });
  };
  render() {
    return(
    <div>
      {this.state.list.map(
        ({ label, data }) => (
          <Item key={label} text={`${label}:${data}`} />
        ),
      )}
      <button onClick={this.removeFirst}>－</button>
    </div>
    );
}
}
export default List
