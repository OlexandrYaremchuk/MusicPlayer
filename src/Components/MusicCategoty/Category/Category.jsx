import React, { useState, useEffect } from "react";
import style from "./Category.module.css";
import sprite from "./../../../image/sprite.svg";
import axios from "axios";

const Category = (props) => {
  const [genre, setGenre] = useState([]);
  const API_KEY = "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4";

  useEffect(() => {
    axios.get(``);
  }, []);

  return (
    <div className={style.Category}>
      <img src={props.imgUrl} alt="" />
      <p>{props.text}</p>
      <a href="">
        <div className={style.playBox}>
          <svg className={style.play}>
            <use href={sprite + "#play2"}></use>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Category;
