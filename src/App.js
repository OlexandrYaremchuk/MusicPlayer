import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Home/HomePage';
import Library from './Components/Library/Library';
import MusicList from './Components/Library/MusicList/MusicList';
import Navigation from './Components/Navigation/Navigation';
import SearchPage from './Components/Search/SearchPage';
import Settings from './Components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Container">
          <Navigation />
          <Routes>
            <Route
              path="HomePage"
              element={
                <HomePage
                  Data={props.stateAPP.filterPage.filterData}
                  CategoryData={props.stateAPP.categoryPage.CategoryData}
                />
              }
            />
            <Route
              path="SearchPage"
              element={<SearchPage SearhPage={props.stateAPP.SearhPage} />}
            />
            <Route
              path="Library"
              element={
                <Library
                  LibraryData={props.stateAPP.libraryPage.LibraryData}
                  newLibraryName={props.stateAPP.libraryPage.newLibraryName}
                  // createNewPlaylist={props.createNewPlaylist}
                  // updateNewLibrary={props.updateNewLibrary}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="Settings" element={<Settings />} />
            <Route path="MusicList" element={<MusicList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
