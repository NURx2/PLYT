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
      pickedVideo : {},
    }

    this.state.videos = JSON.parse(
      localStorage.getItem(
        `pl[${this.state.playlistId}]`
      )
    ).videos.slice(1)

    this.state.pickedVideo = JSON.parse(
      localStorage.getItem(
        `pl[${this.state.playlistId}]`
      )
    ).videos[0]
  }

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
        <iframe 
          className={styles.iframe}
          frameborder="2"
          src={`https://www.youtube.com/embed/${this.state.pickedVideo.id}`} //не нулевый, а текущий выбранный (для перерендера)
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen 
        />
        <div className={styles.containerList}>
          <ul>
            {this.state.videos.map(current => (
              <li>
                <VideoItem {...current}/>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default PlaylistPage;