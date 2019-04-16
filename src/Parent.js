import React, { Component, createRef } from 'react';
import Child from "./Child";

class Parent extends Component {
    childRef = createRef();
    state = {
        count: 0,
    };
    addCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    addChildCount = () => {
        this.childRef.current.addCount();
    };
    render() {
        return (
            <div>
                <h2>Parent:{this.state.count}</h2>
                <button onClick={this.addCount}>+Parent</button>
                <button onClick={this.addChildCount}>+Child</button>
                <Child ref={this.childRef} />
            </div>
        );
    }
}

export default Parent;