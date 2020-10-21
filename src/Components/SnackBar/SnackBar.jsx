import React, { useState, useEffect } from 'react';
import classes from './snackbar.module.scss';

export default function SnackBar({ icon, variant, children: message }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  return (
    <div style={isVisible ? {} : { opacity: 0, zIndex: -1000, visibility: "hidden" }} className={variant === 'error' ? classes.SnackBar__error : classes.SnackBar__success}>
      <span className={classes.SnackBar__icon}>
        <span className={`icon icon-${icon}`} />
      </span>
      <span className={classes.SnackBar__message}>{message}</span>
    </div>
  );
}
