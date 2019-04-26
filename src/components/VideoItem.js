import React from 'react';
import styles from './VideoItem.module.css'
import cn from 'classnames'

export default ({ title, preview, index, picked, pick }) => (
  <button 
    type="button"
    className={cn(
      styles.container,
      index === picked ? styles.pickedContainer : undefined
    )}
    onClick={() => {
      pick(index)
    }}  
  >
    <img src={preview} className={styles.thumb} />
    <div className={styles.details}>
      <h4 className={styles.title}>{title}</h4>
    </div>
  </button>
)