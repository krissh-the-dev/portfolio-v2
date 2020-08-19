import React from 'react';
import styles from './Button.module.scss';

export default function Button({ link, onClick, children }) {
  return (
    <a href={link} onClick={onClick} className={styles.button}>
      {children}
    </a>
  );
}
