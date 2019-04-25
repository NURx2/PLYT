import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import playlists from './data/playlistsData'

if (localStorage.length === 0) {
  // console.log('I am here')
  playlists.forEach((pl, index) => {
    // console.log(pl)
    // console.log(`pl[${index}]`)
    localStorage.setItem(`pl[${index}]`, JSON.stringify(pl));
  });
} else {
  // console.log('I am not here')
}

// console.log(JSON.parse(localStorage.getItem('pl[0]')));

ReactDOM.render(<App />, document.getElementById('root'));