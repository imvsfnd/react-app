import React, { Component } from 'react';

class Input extends Component {
    setRef = (input) =>{
       input.focus();
    }
    render() {
        return (
            <div>
                <h3>Enter your name</h3>
                <input type="text" ref={this.setRef} />
            </div>
        );
    }
}

export default Input;