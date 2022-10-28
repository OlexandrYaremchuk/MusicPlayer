import React from "react";
import style from './../Filter/Filter.module.css';
import FilterElement from "./FilterElement/FilterElement";

const Filter = (props) => {


    let filters = props.Data.map(filterElement => <FilterElement imgUrl={filterElement.imgUrl} text={filterElement.text} />)
    return (
        <div className={style.Filter}>
            {filters}
        </div>
    )
}
export default Filter