import React from 'react';
import classes from './footer.module.scss';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <span className={classes.colorize}>Designed</span> and <span className={classes.colorize}>built</span> <br />
      by Krishna Moorthy
    </div>
  );
}