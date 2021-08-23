import React, { useState, useEffect } from 'react';
import classes from './snackbar.module.scss';

export default function SnackBar({ icon, variant, children: message }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, [message, variant]);

  return (
    <div
      style={isVisible ? {} : { opacity: 0, transform: 'translate(-50%, 5rem)', zIndex: -1000, visibility: 'hidden' }}
      className={variant === 'success' ? classes.SnackBar__success : classes.SnackBar__error}
    >
      <span className={classes.SnackBar__icon}>
        <span className={`icon icon-${icon}`} />
      </span>
      <span className={classes.SnackBar__message}>{message}</span>
    </div>
  );
}
