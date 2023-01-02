import React from "react";
import { Link } from "react-router-dom";
import style from "./LibraryLIst.module.css";
import MusicList from "../MusicList/MusicList";

const LibraryList = (props) => {
  return (
    <div className="">
      <Link onClick={"/MusicList"} to={"/MusicList"}>
        <ul className={style.LibraryList}>
          <div className={style.listBox}>
            <li>
              <img src={props.imgUrl} alt="" />
            </li>
            <li className={style.LibraryText}>{props.text}</li>
          </div>
        </ul>
      </Link>
    </div>
  );
};

export default LibraryList;
