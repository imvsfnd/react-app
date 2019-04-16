import React, { Component } from 'react';

class imgShow extends Component {
    state = {
        visible: true,
    }
    toggle = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };
    render() {
        const { visible } = this.state;
        const styleObj = { display: visible ? 'block' : 'none' };
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <img style={styleObj} src="imgs\imgShow.jpg" alt="imgShow" /> 
            </div>
        );
    }
}

export default imgShow;