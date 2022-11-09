import React from 'react';
import sprite from './../../image/sprite.svg';
import Category from './Category/Category';
import style from './MusicCategory.module.css';

const MusicCategory = (props) => {
  let Categoryes = props.CategoryData.map((cat) => (
    <Category imgUrl={cat.imgUrl} text={cat.text} />
  ));

  return (
    <div className={style.MusicCategoryBox}>
      <h3>Shows to try</h3>
      <div className={style.MusicCategory}>{Categoryes}</div>
    </div>
  );
};

export default MusicCategory;
