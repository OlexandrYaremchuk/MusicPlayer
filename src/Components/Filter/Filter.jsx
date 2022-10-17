import React from "react";
import style from './../Filter/Filter.module.css';
import FilterElement from "./FilterElement/FilterElement";

const Filter = (params) => {
    return (
        <div className={style.Filter}>
            <FilterElement imgUrl={'https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg'} text='Library' />
            <FilterElement imgUrl={'https://res.cloudinary.com/bloomsbury-publishing-public/image/upload/f_auto,q_auto/BPM/Static/Music%20and%20Sound/equalizer-153212_12801.png'} text='Acoustic Hits' />
            <FilterElement imgUrl={'https://legismusic.com/wp-content/uploads/2016/09/musica-electronica-sin-copyright-1.jpg'} text='Electronic' />
            <FilterElement imgUrl={'https://imgs.classicfm.com/images/35606?width=5760&crop=16_9&signature=7t4IOpHgxLgZGdUyYBavQ_kZDE4='} text='Romantic' />
            <FilterElement imgUrl={'data:image/jpeg;base64,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'} text='Hip Hop' />
            <FilterElement imgUrl={'https://0.soompi.io/wp-content/uploads/2016/10/20010154/BTS2.jpg?s=900x600&e=t'} text='Global Top' />
        </div>


    )

}

export default Filter