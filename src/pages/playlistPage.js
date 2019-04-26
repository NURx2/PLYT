import React, { Component } from 'react'
import styles from './playlistPage.module.css'
import VideoItem from '../components/VideoItem'
import AddNewVideo from '../components/AddNewVideo';

class PlaylistPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playlistId : props.match.params.playlistId,
      indPickedVideo : 0,
      videos : JSON.parse(
        localStorage.getItem(`pl[${props.match.params.playlistId}]`)
      ).videos 
    }
  }

  handleAdding = () => {
    this.setState({
      videos : JSON.parse(
        localStorage.getItem(
          `pl[${this.state.playlistId}]`
        )
      ).videos
    })
  }

  handleVideoPick = (indNewPick) => {
    this.setState({
      indPickedVideo : indNewPick,
    })
  }

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
        <iframe 
          className={styles.iframe}
          frameBorder="2"
          src={`https://www.youtube.com/embed/${this.state.videos[this.state.indPickedVideo].id}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen 
        />
        </div>
        <div className={styles.containerList}>
          <ul className={styles.list}>
            {this.state.videos.map((current, index) => (
              <li key={current.id}>
                <VideoItem
                  index={index}
                  picked={this.state.indPickedVideo}
                  pick={this.handleVideoPick}
                  {...current}
                />
              </li>
            ))}
          </ul>
          <AddNewVideo
            playlistId={this.state.playlistId}
            handleAdding={this.handleAdding}
          />
        </div>
      </div>
    );
  }
}

export default PlaylistPage;