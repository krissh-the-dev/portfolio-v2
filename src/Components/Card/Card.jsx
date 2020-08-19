import React from 'react';
import styles from './Card.module.scss';

export default function Card() {
  return (
    <div className={styles.card}>
      <h4 className={styles.card__title}>Meow Meow Cat</h4>
      <div className={styles.card__banner}></div>
      <p className={styles.card__description}>Even if you don't listen to the music by Spotify, be sure to collect this library, please! 🔥 This music player component can be accessed by only one line</p>
    </div>
  )
}
