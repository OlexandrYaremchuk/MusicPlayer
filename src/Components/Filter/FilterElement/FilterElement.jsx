import React from "react";
import style from './FilterElement.module.css'

const FilterElement = (params) => {
    return (

        <div className={style.FilterElement}>

            <p className={style.FilterName}>Library</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqnKR7qX0q2_z6vhzrKosZWDrLMVlDPDyP78HhVyg7-1x5SQdj7OTO6nVyG9nbHuIsZw&usqp=CAU" alt="" />

        </div>



    )

}

export default FilterElement