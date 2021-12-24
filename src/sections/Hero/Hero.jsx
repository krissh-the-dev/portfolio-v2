import React from 'react';
import classes from './hero.module.scss';
import { Link } from 'components';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h5 className={classes.intro}>
          <span role='img' aria-label='wave emoji'>
            👋
          </span>
          Hi, my name is
        </h5>
        <h1 className={classes.hero__name}>
          <span className={classes.emphasize}>Krishna</span>
          <span> Moorthy</span>
        </h1>
        <h2 className={classes.info}>
          I build awesome looking and fully functional web applications using TypeScript and a lot of coffee{' '}
          <span role='img' aria-label='coffee emoji'>
            ☕
          </span>
          .
        </h2>
      </div>

      <div role='img' className={classes.waterMark}>
        DEV
      </div>

      <div className={classes.quickContact}>
        <Link to='mailto: akrishnamoorthy007@gmail.com' lone>
          akrishnamoorthy007@gmail.com
        </Link>
        <Link to='https://twitter.com/krish_the_dev' lone>
          twitter/@krish_the_dev
        </Link>
      </div>
    </section>
  );
}
