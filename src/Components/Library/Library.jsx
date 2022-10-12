import React from "react";
import Header from "../Home/Header/Header";
import Button from "../Other/Button/Button";
import LibraryList from "./LibraryLIst/LibraryLIst";
import style from './Library.module.css'


const Library = (params) => {
    return (

        <div className="Main">
            <Header />
            <h3>Your Library</h3>
            <LibraryList />
            <LibraryList />
            <LibraryList />
            <LibraryList />
            <div className={style.libraryBtn}>
                <Button />

            </div>




        </div>





    )

}

export default Library