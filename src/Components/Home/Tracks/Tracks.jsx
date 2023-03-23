import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import style from "../../Settings/Settings.module.css";
import sprite2 from "../../../image/sprite2.svg";
import "../../../App.css";
import style1 from "./Tracks.module.css";

const Tracks = (props) => {
  const { id } = useParams();
  console.log(id);
  const [tracks, setTracks] = useState([]);
  const API_KEY = "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4";

  useEffect(() => {
    axios
      .get(
        `http://api.napster.com/v2.2/albums/${props.id}/tracks?apikey=${API_KEY}`
      )
      .then((response) => setTracks(response.data.tracks))
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return tracks.map((track) => {
    return (
      <div className={style1.trackItem}>
        <div className={style1.trackBox}>
          <h5>{track.name}</h5>
          <p>{track.artistName}</p>
        </div>
        <audio src={track.previewURL} controls></audio>
      </div>
    );
  });
};

export default Tracks;
