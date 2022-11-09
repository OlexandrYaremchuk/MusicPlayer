import React from "react";
import Style from './../../../App.css';
import FilterElement from "../../Filter/FilterElement/FilterElement";
import Category from "../../MusicCategoty/Category/Category";
import Sstyle from './../SearchMain/SearchMain.module.css'

const SearchMain = (props) => {
    let musicTypes = props.SearhPage.musicSerchTypeData.map(musicTypeElement => <FilterElement imgUrl={musicTypeElement.imgUrl} text={musicTypeElement.text} />)
    let categorys = props.SearhPage.catSerchNameData.map(category => <FilterElement imgUrl={category.imgUrl} text={category.text} />)
    let musicCategorys = props.SearhPage.musicSerchCategoryData.map(musicCategoryElement => <Category imgUrl={musicCategoryElement.imgUrl} text={musicCategoryElement.text} />
    )

    return (
        < div className={Style.Main} >
            <h3>Your Top Genre</h3>
            <div>
                <h3 className={Sstyle.CategoryName}>Rock</h3>

                <div className={Sstyle.musicType}>

                    {musicTypes}
                </div>
                <h3 className={Sstyle.CategoryName}>Your Top Genre</h3>
                <div className={Sstyle.musicType}>
                    {categorys}
                </div>


            </div>
            <div className={Sstyle.MusicTypeS}>
                {musicCategorys}
            </div>
        </ div >


    )

}

export default SearchMain