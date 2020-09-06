import React from 'react';
import classes from './statcard.module.scss';

export default function Card({ data, caption }) {
  return (
    <div className={classes.card}>
      <span className={classes.card__data}>{data}</span>
      <span className={classes.card__caption}>{caption}</span>
    </div>
  );
}
