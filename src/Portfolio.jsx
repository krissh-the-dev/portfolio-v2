import React from 'react';
import classes from './styles/styles.module.scss';

export default function Portfolio() {
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <h5 className={classes.intro}>Hi, my name is</h5>
        <h1 className={classes.hero__name}> <span className={classes.emphasize}>Krishna</span> Moorthy</h1>
        <h2 className={classes.info}>UI/UX designer & Full stack developer</h2>
      </div>

      <div className={classes.quickContact}>
        <a href='mailto: akrishnamoorthy007@gmail.com'>akrishnamoorthy007@gmail.com</a>
        <a href='https://twitter.com/krish_the_dev'>twitter/@krish_the_dev</a>
      </div>
    </div>
  );
}
