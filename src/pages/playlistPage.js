import React, { Component } from 'react'
import styles from './playlistPage.module.css'
import VideoItem from '../components/VideoItem'

class PlaylistPage extends Component {
  constructor(props) {
    console.log('playlistPage')
    super(props)

    this.state = {
      playlistId : props.match.params.playlistId,
      videos : [], 
      indPickedVideo : 0,
    }

    this.state.videos = JSON.parse(
      localStorage.getItem(
        `pl[${this.state.playlistId}]`
      )
    ).videos
  }

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
        <iframe 
          className={styles.iframe}
          frameborder="2"
          src={`https://www.youtube.com/embed/${this.state.videos[this.state.indPickedVideo].id}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen 
        />
        </div>
        <div className={styles.containerList}>
          <ul className={styles.list}>
            {this.state.videos.map(current => (
              <li key={current.id}>
                <VideoItem {...current}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PlaylistPage;