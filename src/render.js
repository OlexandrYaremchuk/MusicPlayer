import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createNewPlaylist } from './Components/redux/state';

let rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App stateAPP={state} createNewPlaylist={createNewPlaylist} />);
};

export default rerender;
