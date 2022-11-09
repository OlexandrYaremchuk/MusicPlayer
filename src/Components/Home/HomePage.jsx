import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './../../App.css';
import Filter from './../Filter/Filter'
import Header from './../Home/Header/Header';
import MusicCategory from './../MusicCategoty/MusicCategory';

function HomePage(props) {
    return (

        <div className="Main">
            <Header />
            <Filter Data={props.Data} />
            <MusicCategory CategoryData={props.CategoryData} />
        </div>

    );
}

export default HomePage;
