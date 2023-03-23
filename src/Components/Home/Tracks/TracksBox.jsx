import React from "react";
import { useParams } from "react-router-dom";
import Tracks from "./Tracks";
import { Link } from "react-router-dom";
import style from "../../Settings/Settings.module.css";
import sprite2 from "../../../image/sprite2.svg";
import style1 from "./TracksBox.module.css";

import "../../../App.css";

const TracksBox = () => {
  const { id } = useParams();
  return (
    <div className="Main">
      <div className={style1.trackMainContainer}>
        <Link to="/HomePage">
          <svg className={style.IconMenu}>
            <use href={sprite2 + "#icon-arrow-left2"}></use>
          </svg>
        </Link>
        <Tracks id={id} />
      </div>
    </div>
  );
};
export default TracksBox;
