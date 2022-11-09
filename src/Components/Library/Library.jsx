import React, { useState } from "react";
import Header from "../Home/Header/Header";

import LibraryList from "./LibraryLIst/LibraryLIst";
import style from './Library.module.css'
import Modal from "../Other/Modal/Modal";

const Library = (props) => {

    const [isModal, setModal] = React.useState(false);

    let newPlaylistElement = React.createRef();

    let createPlaylist = () => {
        let newList = newPlaylistElement.current.value;
        props.createNewPlaylist(newList)
    }

    let Librarys = props.LibraryData.map(libraryElement => <LibraryList imgUrl={libraryElement.imgUrl} text={libraryElement.text} />);


    return (

        <div className="Main">
            <Header />
            <h3>Your Library</h3>
            {Librarys}
            <div className={style.libraryBtn}>
                <button className={style.btn} onClick={() => setModal(true)} >Create Playlist
                </button>
                {/* <Button /> */}
            </div>

            <Modal isVisible={isModal}

                content={<input className={style.listName} type="text" ref={newPlaylistElement} placeholder='Playlist Name' />}
                footer={<button onClick={createPlaylist}>Create Playlist</button>}
                onClose={() => setModal(false)} />

        </div>
    )
}
export default Library
