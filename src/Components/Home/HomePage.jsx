import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './../../App.css';
import Filter from './../Filter/Filter'
import Header from './../Home/Header/Header';
import MusicCategory from './../MusicCategoty/MusicCategory';

function HomePage() {
    return (

        <div className="Main">
            <Header />
            <Filter />
            <MusicCategory />
        </div>

    );
}

export default HomePage;
