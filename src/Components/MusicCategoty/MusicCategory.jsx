import React from "react";
import sprite from './../../image/sprite.svg';
import Category from "./Category/Category";
import style from './MusicCategory.module.css';

const MusicCategory = (params) => {
    return (
        <div className={style.MusicCategoryBox}>
            <h3>Shows to try</h3>
            <div className={style.MusicCategory}>
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />

            </div>

        </div>


    )

}

export default MusicCategory