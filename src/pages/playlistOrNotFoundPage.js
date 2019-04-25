import React, { Component } from 'react'
import PlaylistPage from './playlistPage';
import NotFoundPage from './notFoundPage';

class PlaylistOrNotFoundPage extends Component {
  render() {
    return JSON.parse(
      localStorage.getItem(
        `pl[${this.props.match.params.playlistId}]`
      )
    ) ? 
    <PlaylistPage {...this.props} /> :
    <NotFoundPage />
  } 
}

export default PlaylistOrNotFoundPage;