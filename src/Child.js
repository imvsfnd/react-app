import React, { Component } from 'react';

class Child extends Component {
    render() {
        const { count, addParentCount, addChildCount } = this.props;
        return (
            <div>
                <h2>Child:{count}</h2>
                <button onClick={addChildCount}>+Child</button>
                <button onClick={addParentCount}>+Parent</button>
            </div>
        );
    }
}

export default Child;