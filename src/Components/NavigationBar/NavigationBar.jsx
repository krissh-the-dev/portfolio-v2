import React from 'react';
import classes from './NavigationBar.module.scss';

import Button from '../Button';

export default function NavigationBar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <div className={classes.nav__list_container}>
          <input type='checkbox' className={classes.nav__check} id='nav__check' />
          <label htmlFor='nav__check' className={classes.nav__toggle}>&nbsp;</label>
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
        </div>
        <Button link='#resume'>Download CV</Button>
      </div>
    </nav>
  )
}
