import React, { Component } from 'react'

export default class CardTeacher extends Component {
    render() {
        const { name, link, image } = this.props.data;
        return (
            <div>
                <a href={link} className="card__teacher">
                    <img className="card__avatar" src={image} alt="avatar"/>
                    <span>{name}</span>
                </a>
            </div>
        )
    }
}
