import React from 'react';
import classes from './donate.module.scss';

import { Button } from '../../Components';

export default function Donate() {
  return (
    <section className={classes.donate}>
      <p className={classes.ask}>I want to ask you something... <br /> If you like my work, please consider donating to one of the following:</p>
      <div className={classes.container}>
        <div className={classes.donate__wiki}>
          <h4 className={classes.donate__title}>Donate Wikipedia</h4>
          <p className={classes.description}>Wikipedia has served the world for decades. It is being used by millions of people everyday. Today, I humbly request you to donate a few dollars to keep this awesome site running.</p>
          <Button link='https://donate.wikimedia.org/'>{'Donate ->'}</Button>
        </div>
        <div className={classes.donate__blackLives}>
          <h4 className={classes.donate__title}>Black Lives Matter</h4>
          <p className={classes.description}>Show your support to the Black Lives Matter movement. It's our duty to make this world a wonder place to live. It's the time to raise your voice against racism.</p>
          <Button link='https://secure.actblue.com/donate/ms_blm_homepage_2019'>{'Donate ->'}</Button>
        </div>
        <div className={classes.donate__me}>
          <h4 className={classes.donate__title}>Buy me a coffee</h4>
          <p className={classes.description}>If you don't want to donate to the above, but you do like my work, bu me a coffee.</p>
          <Button link='https://secure.actblue.com/donate/ms_blm_homepage_2019'>{'Donate ->'}</Button>
        </div>
      </div>
    </section>
  );
}
