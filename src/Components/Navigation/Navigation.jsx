import React from "react";
import sprite from './../../image/sprite.svg';
import Control from "./Control/Control";
import style from './Navigation.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Navigation = (params) => {
    return (

        < div className={style.Navigation} >
            <ul className={style.NavigationList}>
                <Link to='/HomePage'>
                    <li>
                        <svg className={style.iconMenu}>
                            <use href={sprite + '#home'}></use>
                        </svg>
                        Home
                    </li>

                </Link>

                <a href='/Library'><li>
                    <svg className={style.iconMenu}>
                        <use href={sprite + '#radio-checked2'}></use>
                    </svg>
                    Library
                </li></a>

                <Link to='/SearchPage'>
                    <li>
                        <svg className={style.iconMenu}>
                            <use href={sprite + '#search'}></use>
                        </svg>
                        Search
                    </li>
                </Link>

                <Link to='/Library'>
                    <li>
                        <svg className={style.iconMenu}>
                            <use href={sprite + '#radio-checked2'}></use>
                        </svg>
                        Library
                    </li>
                </Link>

            </ul>
            <div className={style.MusicPlay}>
                <img
                    src="https://img.etimg.com/thumb/msid-81525531,width-650,imgsize-622277,,resizemode-4,quality-100/music_thinkstockphotos.jpg"
                    alt=""
                />
                <h4 className={style.Track}>Track</h4>
                <p className={style.Artist}>Artist</p>
                <Control />

            </div>
        </ div >

    )

}

export default Navigation





