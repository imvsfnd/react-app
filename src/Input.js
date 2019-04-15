import React, { Component } from 'react';

class Input extends Component {
    componentDidMount() {
        this.refs.myInput.focus();
    }
    render() {
        return (
            <div>
                <h3>Enter your name</h3>
                <input type="text" ref="myInput" />
            </div>
        );
    }
}

export default Input;