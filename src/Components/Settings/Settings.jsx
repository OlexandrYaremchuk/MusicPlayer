import React from "react";
import style from "./Settings.module.css";
import sprite2 from "../../image/sprite2.svg";
import { Link } from "react-router-dom";

const Settings = (props) => {
  return (
    <div className={style.settings}>
      <h1></h1>
      <div className={style.navBox}>
        <Link to="/HomePage">
          <svg className={style.IconMenu}>
            <use href={sprite2 + "#icon-arrow-left2"}></use>
          </svg>
        </Link>
      </div>

      <div className={style.navBox}>
        <svg className={style.IconMenu}>
          <use href={sprite2 + "#icon-cog"}></use>
        </svg>
        <h1>Settings</h1>
      </div>
    </div>
  );
};

export default Settings;
