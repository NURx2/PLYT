import React from 'react';
import { playlists } from '../data/playlists'
import addNewPlaylistItem from '../components/addNewPlaylistItem'

export default () => (
  <div>
    <ul>
      {
        playlists.map(pl => (
          <li key={pl.state.dateOfBirth}>
           { pl }
          </li>
        ))
      }
      <li>
        { addNewPlaylistItem }
      </li>
    </ul>
  </div>
);