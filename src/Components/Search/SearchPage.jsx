import React from "react";
import Search from "./SearchInput/Search";
import SearchMain from "./SearchMain/SearchMain";
import '../../App.css';
import Header from "../Home/Header/Header";

const SearchPage = (props) => {
    return (
        <div className='Main'>
            <Header />
            <Search />
            <SearchMain SearhPage={props.SearhPage} />
        </div >


    )

}

export default SearchPage