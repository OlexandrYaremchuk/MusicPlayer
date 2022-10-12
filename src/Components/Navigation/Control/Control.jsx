import React from "react";
import sprite from './../../../image/sprite.svg';
import style from './Control.module.css';

const Control = (params) => {
    return (
        <div className={style.playBtn}>
            <div className={style.progress}>
                <div className={style.progressPoint} ></div>
            </div>
            <div>
                <svg className={style.iconMenu}>
                    <use href={sprite + '#previous2'}></use>
                </svg>

                <svg className={style.iconMenu}>
                    <use href={sprite + '#play2'}></use>
                </svg>
                <svg className={style.iconMenu}>
                    <use href={sprite + '#next2'}></use>
                </svg>
            </div>

        </div>





    )

}

export default Control





