import React from 'react';
import classes from './loader.module.scss';

export default function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes.container}>
        <div className={classes.logo}></div>
        <div className={classes.progress}></div>
      </div>
    </div>
  );
}
