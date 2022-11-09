import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Home/HomePage';
import Library from './Components/Library/Library';
import Navigation from './Components/Navigation/Navigation';
import SearchPage from './Components/Search/SearchPage';

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
                  Data={props.stateAPP.filterData}
                  CategoryData={props.stateAPP.CategoryData}
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
                  LibraryData={props.stateAPP.LibraryData}
                  createNewPlaylist={props.createNewPlaylist}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
