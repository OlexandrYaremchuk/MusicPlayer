import React, { useState } from "react";
import Header from "../Home/Header/Header";
import LibraryList from "./LibraryLIst/LibraryLIst";
import style from "./Library.module.css";
import Modal from "../Other/Modal/Modal";
import {
  createNewPlaylistActionCreator,
  updateNewLibraryActionCreator,
} from "../redux/state";

const Library = (props) => {
  const [isModal, setModal] = React.useState(false);
  // create link from input
  let newPlaylistElement = React.createRef();
  // give value from input
  let createPlaylist = () => {
    let newList = newPlaylistElement.current.value;
    // props.createNewPlaylist(newList);
    props.dispatch(createNewPlaylistActionCreator(newList));
    props.updateNewLibrary("");
  };
  // send DATA from state
  let Librarys = props.LibraryData.map((libraryElement) => (
    <LibraryList imgUrl={libraryElement.imgUrl} text={libraryElement.text} />
  ));
  // add onChange
  let libraryNameChange = () => {
    let newList = newPlaylistElement.current.value;
    // props.updateNewLibrary(newList);
    props.dispatch(updateNewLibraryActionCreator(newList));
    console.log(newList);
  };

  return (
    <div className="Main">
      <Header />
      <h3>Your Library</h3>
      {Librarys}

      <div className={style.libraryBtn}>
        <button className={style.btn} onClick={() => setModal(true)}>
          Create Playlist
        </button>
        {/* <Button /> */}
      </div>

      <Modal
        isVisible={isModal}
        content={
          <input
            className={style.listName}
            type="text"
            ref={newPlaylistElement}
            placeholder="Playlist Name"
            value={props.newLibraryName}
            onChange={libraryNameChange}
          />
        }
        footer={<button onClick={createPlaylist}>Create Playlist</button>}
        onClose={() => setModal(false)}
      />
    </div>
  );
};
export default Library;
