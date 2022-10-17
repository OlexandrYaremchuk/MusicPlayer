import React from "react";
import sprite from './../../image/sprite.svg';
import Category from "./Category/Category";
import style from './MusicCategory.module.css';

const MusicCategory = (props) => {
    return (
        <div className={style.MusicCategoryBox}>
            <h3>Shows to try</h3>
            <div className={style.MusicCategory}>
                <Category imgUrl={'https://img.etimg.com/thumb/msid-73612807,width-650,imgsize-212384,,resizemode-4,quality-100/vinyl-records_istock.jpg'} text='Old is Gold' />
                <Category imgUrl={'https://i.scdn.co/image/ab67706c0000bebb81b02b2a589b6fd6284c1054'} text='Pop Hits' />
                <Category imgUrl={'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDkxNzA3MjAxODg5NjQw/100-best-rock-songs-of-the-90s.jpg'} text="90's Hits" />
                <Category imgUrl={'https://media.istockphoto.com/photos/african-jazz-musician-playing-the-saxophone-picture-id465732100?k=20&m=465732100&s=612x612&w=0&h=ybE66iDarLGktmFEga_gZ5xlUxPMuB7uK3GYmbgkZh0='} text='Jazz Music' />
                <Category imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyibnHzbDWmBr2bN-IvE4hD4x7x5mQrnIt7w&usqp=CAU'} text='Hard Rok' />
                <Category imgUrl={'https://cdn.lifehack.org/wp-content/uploads/2015/11/03115353/10838430745_70da469b0b_k.jpg'} text='Underground' />


            </div>

        </div>


    )

}

export default MusicCategory