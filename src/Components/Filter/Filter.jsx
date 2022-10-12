import React from "react";
import style from './../Filter/Filter.module.css';
import FilterElement from "./FilterElement/FilterElement";

const Filter = (params) => {
    return (
        <div className={style.Filter}>
            <FilterElement />
            <FilterElement />
            <FilterElement />
            <FilterElement />
            <FilterElement />
            <FilterElement />
        </div>


    )

}

export default Filter