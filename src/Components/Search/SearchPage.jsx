import React from "react";
import Search from "./SearchInput/Search";
import SearchMain from "./SearchMain/SearchMain";
import '../../App.css';
import Header from "../Home/Header/Header";

const SearchPage = (params) => {
    return (
        <div className='Main'>
            <Header />
            <Search />
            <SearchMain />
        </div >


    )

}

export default SearchPage