import React from 'react';
import classes from './stats.module.scss';

import { StatCard as Card } from '../../Components';

export default function Statistics() {
  return (
    <section className={classes.statistics}>
      <div className={classes.container}>
        <h3 className={classes.heading}>Statistics</h3>
        <div className={classes.contributions}>
          <Card data={1300} caption={'contributions last year'} />
          <Card data={100} caption={'contributions last week'} />
        </div>
        <div className={classes.stats}>
          <Card data={46} caption={'contributed repositories'} />
          <Card data={36} caption={'followers'} />
          <Card data={43} caption={'following'} />
        </div>
      </div>
    </section>
  );
}
