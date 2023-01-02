import state, { subscribe } from '././Components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createNewPlaylist, updateNewLibrary } from './Components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
    root.render(<App stateAPP={state} createNewPlaylist={createNewPlaylist} updateNewLibrary={updateNewLibrary} />);
};





rerender(state);
subscribe(rerender)