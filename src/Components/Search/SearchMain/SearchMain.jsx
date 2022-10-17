import React from "react";
import FilterStyle from './../../../Components/Filter/Filter.module.css';
import CategoryStyle from './../../MusicCategoty/MusicCategory.module.css'
import Style from './../../../App.css';
import FilterElement from "../../Filter/FilterElement/FilterElement";
import Category from "../../MusicCategoty/Category/Category";
import Sstyle from './../SearchMain/SearchMain.module.css'

const SearchMain = (params) => {
    return (
        < div className={Style.Main} >
            <h3>Your Top Genre</h3>
            <div>
                <h3 className={Sstyle.CategoryName}>Rock</h3>

                <div className={Sstyle.musicType}>
                    <FilterElement imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOc0RwkVdeoAW2c6NkTUnell0nlPV-bhRp2AN_mHyzJIyV015HVa8No8qr6AufNeh6GM&usqp=CAU'} text='Rock and Roll' />
                    <FilterElement imgUrl={'https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg'} text='Punk Rok' />
                    <FilterElement imgUrl={'https://t4.ftcdn.net/jpg/03/67/02/71/360_F_367027157_IgeJDDKGow9Iyz1lSR0wrRR4EwclL7hT.jpg'} text='Heavy Metal' />
                    <FilterElement imgUrl={'https://i0.wp.com/vintageheavymetal.com/wp-content/uploads/2018/05/80s-Heavy-Metal-Concert-Audience-Metal-Horns.jpg'} text='Hard Rock' />

                </div>
                <h3 className={Sstyle.CategoryName}>Your Top Genre</h3>
                <div className={Sstyle.musicType}>
                    <FilterElement imgUrl={'https://www.goethe.de/resources/files/jpg954/header-bruno-emmanuelle-gi6-m_t_w-e-unsplash1-formatkey-jpg-w320r.jpg'} text='Electronic' />
                    <FilterElement imgUrl={'https://tomhess.net/files/images/BackUpPlanForMusicians/Music-Career-Backup-Plans.png'} text='Rainy Roads' />
                    <FilterElement imgUrl={'https://imro.ie/wp-content/themes/yootheme/cache/f9/crowded-concert-fall-with-singer-on-stage-f945871e.jpeg'} text='EDM' />

                </div>


            </div>
            <div className={Sstyle.MusicTypeS}>
                <Category imgUrl={'https://cdn3.vectorstock.com/i/1000x1000/78/77/music-party-vector-267877.jpg'} text='Party Mix' />
                <Category imgUrl={'https://besthqwallpapers.com/Uploads/20-4-2017/15307/thumb2-dj-night-club-dj-console-concert-musician.jpg'} text='DJ Mix' />
                <Category imgUrl={'https://nationaltoday.com/wp-content/uploads/2021/10/Pop-Music-Chart-Day.jpg'} text='POP Mix' />
                <Category imgUrl={'https://images.saymedia-content.com/.image/t_share/MTc0NDkxNzA3MjAxODg5NjQw/100-best-rock-songs-of-the-90s.jpg'} text='Rok Mix' />
                <Category imgUrl={'https://www.careersinmusic.com/wp-content/uploads/2019/11/study-jazz.jpg'} text='Your Jazz' />
                <Category imgUrl={'https://static.displate.com/857x1200/displate/2020-04-17/f1df5457fe7d95933dd77c9498fa54a4_c3733e09b0da276f695a2a38c739a894.jpg'} text='Techno Mix' />

            </div>



        </ div >


    )

}

export default SearchMain