import React from "react";
import style from './LibraryLIst.module.css'
import sprite from '../../../image/sprite.svg'
import { Link } from 'react-router-dom'


const LibraryList = (props) => {

    return (

        <div className="">

            <ul className={style.LibraryList}>
                <div className={style.listBox}>
                    <li>
                        <img src={props.imgUrl} alt="" />
                    </li>
                    <li className={style.LibraryText}>
                        {props.text}
                    </li>
                </div>


            </ul>


        </div>





    )

}

export default LibraryList