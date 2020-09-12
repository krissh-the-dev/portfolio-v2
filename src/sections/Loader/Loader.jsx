import React from 'react';
import classes from './loader.module.scss';

export default function Loader({ style }) {
  return (
    <div className={classes.loader} style={style}>
      <div className={classes.container}>
        <div className={classes.logo}></div>
        <div className={classes.progress}></div>
      </div>
    </div>
  );
}
