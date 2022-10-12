import React from "react";
import sprite from './../../../image/sprite.svg';
import style from './../SearchInput/Search.module.css';

const Search = (params) => {
    return (
        <div className={style.searchContainer}>
            <div className={style.boxName}>
                <h3>Search</h3>
            </div>

            <div className={style.SearchBox}>

                <input className={style.SearchInput} type="text" />
                <svg className={style.iconMenu}>
                    <use href={sprite + '#search'}></use>
                </svg>
            </div>

        </div >


    )

}

export default Search