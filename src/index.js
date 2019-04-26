import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import playlists from './data/playlistsData'

if (localStorage.length === 0) {
  playlists.forEach((pl, index) => {
    localStorage.setItem(`pl[${index}]`, JSON.stringify(pl));
  });
}

ReactDOM.render(<App />, document.getElementById('root'));