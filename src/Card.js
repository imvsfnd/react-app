import React, { Component } from 'react'
import style from './Card.module.css'

export class Card extends Component {
    render() {
        const { title, desc, like, students, price, teacher, video } = this.props.data;
        return (
            <div className={style.card}>
                <h2 className={style.card__title}>{title}</h2>
                <div className={style.card__desc}>{desc}</div>
                <div className={style.card__stats}>
                    <div className={style.card__stat}>
                        <label>like</label>
                        <div>{like}</div>
                    </div>
                    <div className={style.card__stat}>
                        <label>student</label>
                        <div>{students}</div>
                    </div>
                    <div className={style.card__stat}>
                        <label>價格</label>
                        <div>{price}</div>
                    </div>
                    <div className={style.card__stat}>
                        <label>teacher</label>
                        <div>{teacher.name}</div>
                    </div>
                </div>
                <video
                    className={style.card__video}
                    poster={video.poster}
                    src={video.source}
                    controls
                />
            </div>
        )
    }
}

export default Card
