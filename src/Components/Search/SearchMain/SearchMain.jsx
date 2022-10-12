import React from "react";
import FilterStyle from './../../../Components/Filter/Filter.module.css';
import CategoryStyle from './../../MusicCategoty/MusicCategory.module.css'
import Style from './../../../App.css';
import FilterElement from "../../Filter/FilterElement/FilterElement";
import Category from "../../MusicCategoty/Category/Category";

const SearchMain = (params) => {
    return (
        < div className={Style.Main} >
            <h3>Your Top Genre</h3>

            <div className={FilterStyle.Filter}>
                <FilterElement />
                <FilterElement />
                <FilterElement />
            </div>
            <div className={CategoryStyle.MusicCategory}>
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />

            </div>



        </ div>


    )

}

export default SearchMain