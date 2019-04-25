import React from 'react'
import styles from './notFoundPage.module.css'

export default () => {
  console.log('NotFoundPage') 
  return <div className={styles.container}>
    <h1>404 Not Found</h1>
  </div>
}