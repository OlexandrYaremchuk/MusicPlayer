import React from "react";
import style from './Category.module.css';
import sprite from './../../../image/sprite.svg';

const Category = (props) => {
    return (
        <div className={style.Category}>
            <img src={props.imgUrl} alt="" />
            <p>
                {props.text}
            </p>
            <a href="">
                <div className={style.playBox} >
                    <svg className={style.play}>
                        <use href={sprite + '#play2'}></use>
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default Category