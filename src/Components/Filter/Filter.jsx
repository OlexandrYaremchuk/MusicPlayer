import React from "react";
import style from "./../Filter/Filter.module.css";
import FilterElement from "./FilterElement/FilterElement";

const Filter = (props) => {
  // let filters = props.Data.map(filterElement => <FilterElement imgUrl={filterElement.imgUrl} text={filterElement.text} />)
  return (
    <div className={style.Filter}>
      <div className={style.title}>
        {" "}
        <h3>Top albums FOR Month</h3>
      </div>
      <div className={style.Filter}>
        <FilterElement />
      </div>
    </div>
  );
};
export default Filter;
