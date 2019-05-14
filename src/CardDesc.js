import React, { Component } from 'react'

export default class CardDesc extends Component {
    state = {
        open: false,
    };
    toggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };
    render() {
        const { open } = this.state;
        const readFn = `card__desc__text ${open ? '' : 'less'}`;
        return (
          <div className="card__desc">
            <div className={readFn}>{this.props.children}</div>
            <button
              className="card__desc__btn"
              onClick={this.toggle}
            >
              {open ? 'Less' : 'More'}
            </button>
          </div>
        );
    }
}
