import React from "react";
import sprite from './../../../image/sprite.svg';
import style from './Header.module.css';
import { Link } from 'react-router-dom'

const Header = (params) => {
    return (
        <div className={style.Header}>
            <ul className={style.HeaderIcon}>
                <li>
                    <svg className={style.IconMenu}>
                        <use href={sprite + '#bell'}></use>
                    </svg>
                </li>
                <li>
                    <svg className={style.IconMenu}>
                        <use href={sprite + '#history'}></use>
                    </svg>
                </li>
                <li>
                    <Link to='/Settings'>
                        <svg className={style.IconMenu}>
                            <use href={sprite + '#cog'}></use>
                        </svg>
                    </Link>
                </li>


            </ul>
        </div>


    )

}

export default Header