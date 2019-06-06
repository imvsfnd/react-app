import React, { Component } from 'react'
import Item from './Item'

const steps = [
    'Learn Javascript',
    'Learn CSS',
    'Learn React',
    'Learn pastell',
];
class List extends Component {

    render() {
        return (
            <div>
                {steps.map(text => <Item>{text}</Item>)}
            </div>
        )
    }
}

export default List
