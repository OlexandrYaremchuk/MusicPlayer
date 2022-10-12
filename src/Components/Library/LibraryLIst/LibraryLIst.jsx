import React from "react";
import style from './LibraryLIst.module.css'


const LibraryList = (params) => {
    return (

        <div className="">
            <ul className={style.LibraryList}>
                <li>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN32ljmb9fl34ucmnO_-4-Hr9GEml_nl6mZHsK-Rmh2G3Y04egtHXYNXrWL1m5QenG8Ek&usqp=CAU" alt="" />
                </li>
                <li className={style.LibraryText}>
                    Liked
                </li>
            </ul>


        </div>





    )

}

export default LibraryList