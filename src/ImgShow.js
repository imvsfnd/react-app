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
        const imgOption = visible?'image':'imgae hide'
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <img className={imgOption} src="imgs\imgShow.jpg" alt="imgShow" /> 
            </div>
        );
    }
}

export default imgShow;