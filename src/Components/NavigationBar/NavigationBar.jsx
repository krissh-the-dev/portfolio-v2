import React from 'react';
import classes from './NavigationBar.module.scss';

import Button from '../Button';

export default function NavigationBar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>
            <a className={classes.nav__link} href='#about'>About</a>
          </li>
          <li className={classes.nav__item}>
            <a className={classes.nav__link} href='#projects'>Projects</a>
          </li>
          <li className={classes.nav__item}>
            <a className={classes.nav__link} href='#contact'>Contact</a>
          </li>
        </ul>
        <Button link='#resume'>Download CV</Button>
      </div>
    </nav>
  )
}
