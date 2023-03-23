import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./FilterElement.module.css";
import Sstyle from "./../FilterElement/FilterElement.module.css";
import sprite from "./../../../image/sprite.svg";
import axios from "axios";

const FilterElement = (props) => {
  const [albumsData, setAlbumsData] = useState([]);

  const API_KEY = "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4";

  useEffect(() => {
    axios
      .get(`http://api.napster.com/v2.2/albums//top?apikey=${API_KEY}&limit=10`)
      .then((response) => setAlbumsData(response.data.albums))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return albumsData.map((album) => {
    const { id, name, artistName } = album;
    const dateReleased = album.released;
    return (
      <Link to={`/TracksBox/${id}`}>
        <div className={style.topAlbumsBox}>
          <div className={style.shadow}>
            <img
              src={`https://api.napster.com/imageserver/v2/albums/${id}/images/500x500.jpg`}
              alt="Album image"
            />
          </div>
          <div className={style.FilterElement} key={id}>
            <p className={style.FilterName}>{name}</p>
            <span>
              <p>{artistName}</p>
            </span>

            <h5>Date of released: {dateReleased.slice(0, 10)}</h5>
          </div>
        </div>
      </Link>
    );
  });
};

export default FilterElement;
