// import state, { subscribe } from '././Components/redux/state';
import React from 'react';
import store from '././Components/redux/state';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createNewPlaylist, updateNewLibrary } from './Components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
    root.render(<App stateAPP={store.getState()}
        // createNewPlaylist={store.createNewPlaylist.bind(store)}
        // updateNewLibrary={store.updateNewLibrary.bind(store)}
        dispatch={store.dispatch.bind(store)}
    />);
};
rerender(store.getState());
store.subscribe(rerender)