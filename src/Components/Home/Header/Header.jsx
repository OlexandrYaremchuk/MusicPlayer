//import React library
import React from "react";

//import PNG sprite file which contains SVG icons
import sprite from "./../../../image/sprite.svg";

//import CSS styling for the Header component
import style from "./Header.module.css";

//import Link component from react-router-dom to provide link functionality
import { Link } from "react-router-dom";

//Component function which returns JSX
const Header = (params) => {
  return (
    <div className={style.Header}>
      {" "}
      <ul className={style.HeaderIcon}>
        {" "}
        <li>
          {" "}
          <svg className={style.IconMenu}>
            {" "}
            <use href={sprite + "#bell"}></use>
          </svg>
        </li>
        <li>
          {" "}
          <svg className={style.IconMenu}>
            {" "}
            <use href={sprite + "#history"}></use>
          </svg>
        </li>
        <li>
          {" "}
          <Link to="/Settings">
            {" "}
            <svg className={style.IconMenu}>
              {" "}
              <use href={sprite + "#cog"}></use>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

//export Header component as default
export default Header;
