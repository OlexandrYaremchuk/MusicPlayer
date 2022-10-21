import React from "react";
import style from './LibraryLIst.module.css'


const LibraryList = (props) => {
    return (

        <div className="">
            <ul className={style.LibraryList}>
                <li>
                    <img src={props.imgUrl} alt="" />
                </li>
                <li className={style.LibraryText}>
                    {props.text}
                </li>
            </ul>


        </div>





    )

}

export default LibraryList