import React, { Component } from 'react'
import styles from './playlistPage.module.css'

export default class playlistPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistId : props.playlistId,
    }
  }

  render() {
    return (
      <div className={styles.page}>
        
      </div>
    );
  }
}