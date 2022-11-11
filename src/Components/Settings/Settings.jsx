import React from "react";
import style from './Settings.module.css'
import sprite from '../../image/sprite.svg'



const Settings = (props) => {

    return (

        <div className={style.settings}>
            <h1></h1>
            <div className={style.navBox}>
                <svg className={style.IconMenu}>
                    <use href={sprite + '#cog'}></use>
                </svg>
                <h1>Settings</h1>
            </div>
        </div>

    )

}

export default Settings