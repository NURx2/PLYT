import React from 'react';
import styles from './VideoItem.module.css'

export default ({ title, preview }) => (
  <a href="#" className={styles.container}>
    <img src={preview} className={styles.thumb} />
    <div className={styles.details}>
      <h4 className={styles.title}>{title}</h4>
    </div>
  </a>
)