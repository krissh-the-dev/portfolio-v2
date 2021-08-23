import React from 'react';
import styles from './Button.module.scss';

export default function Button({ link, onClick, children, ...rest }) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      onClick={onClick}
      className={!rest.disable ? styles.button : styles.disabledButton}
      {...rest}
    >
      {children}
    </a>
  );
}
