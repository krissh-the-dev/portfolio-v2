import React from 'react';
import Button from './Components/Button/Button';
import classes from './styles/styles.module.scss';

export default function Portfolio() {
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <h5 className={classes.intro}>Hi, my name is</h5>
        <h1 className={classes.hero__name}> <span className={classes.emphasize}>Krishna</span> Moorthy</h1>
        <h2 className={classes.info}>UI/UX designer & Full stack developer</h2>
      </div>
    </div>
  );
}
