import React from "react";
import Header from "../Home/Header/Header";
import Button from "../Other/Button/Button";
import LibraryList from "./LibraryLIst/LibraryLIst";
import style from './Library.module.css'


const Library = (params) => {

    let LibraryData = [
        { id: 1, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN32ljmb9fl34ucmnO_-4-Hr9GEml_nl6mZHsK-Rmh2G3Y04egtHXYNXrWL1m5QenG8Ek&usqp=CAU', text: 'Liked' },
        { id: 2, imgUrl: 'https://thumbs.dreamstime.com/b/favourite-music-button-app-development-amazing-favourite-button-placed-over-violet-gradient-image-useful-music-148676444.jpg', text: 'Favourite' },
        { id: 3, imgUrl: 'https://images.squarespace-cdn.com/content/v1/5c52add271069943f80a4056/c75075ac-0b76-4e8f-baa3-7aa933ca3a1b/music-head-shake.gif', text: 'Nice Music' },
        { id: 4, imgUrl: 'https://media.istockphoto.com/vectors/rock-sign-gesture-with-lightning-for-your-design-vector-id1183921035?k=20&m=1183921035&s=612x612&w=0&h=No2Ez2fPgiaDu1RiGywo5kF38g_r26g5ZDq1WuBml6w=', text: 'My Rock' }
    ]
    let Librarys = LibraryData.map(libraryElement => <LibraryList imgUrl={libraryElement.imgUrl} text={libraryElement.text} />);


    return (

        <div className="Main">
            <Header />
            <h3>Your Library</h3>
            {Librarys}
            <div className={style.libraryBtn}>
                <Button />

            </div>




        </div>





    )

}

export default Library