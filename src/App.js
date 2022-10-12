import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Home/HomePage';
import Library from './Components/Library/Library';
import Navigation from './Components/Navigation/Navigation';
import SearchPage from './Components/Search/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Container">
          <Navigation />
          <Routes>
            <Route path="HomePage" element={<HomePage />} />
            <Route path="SearchPage" element={<SearchPage />} />
            <Route path="Library" element={<Library />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
