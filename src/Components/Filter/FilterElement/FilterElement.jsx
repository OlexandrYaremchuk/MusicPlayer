import React from "react";
import style from './FilterElement.module.css'
import Sstyle from './../FilterElement/FilterElement.module.css';
import sprite from './../../../image/sprite.svg'

const FilterElement = (props) => {
    return (

        <div className={style.FilterElement}>

            <svg className={Sstyle.play}>
                <use href={sprite + '#play2'}></use>
            </svg>

            <p className={style.FilterName}>{props.text}</p>

            <div className={style.shadow}>

                <img src={props.imgUrl} alt="" />

            </div>

        </div>



    )

}

export default FilterElement