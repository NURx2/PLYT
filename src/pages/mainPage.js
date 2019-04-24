import React from 'react';
import playlists from '../data/playlistsData'
// import addNewPlaylistItem from '../components/addNewPlaylistItem'

export default () => {
  console.log(playlists)
  
  return <div>
    <ul>
      {
        playlists.map(pl => (
          <li key={pl.dateOfBirth}>
           { pl }
          </li>
        ))
      }
      {/* <li>
        { addNewPlaylistItem }
      </li> */}
    </ul>
  </div>
};