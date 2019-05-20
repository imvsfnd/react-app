import React, { Component } from 'react'
import style from './Card.module.css'
export class CardTeacher extends Component {

    render() {
        const { name, link, image } = this.props.data;
        return (
            <a className={style.card__link} href={link}>
                <img className={style.card__avatar} src={image} alt="avatar" />
                <span className={style.card__name}>{name}</span>
            </a>
        )
    }
}

export default CardTeacher
