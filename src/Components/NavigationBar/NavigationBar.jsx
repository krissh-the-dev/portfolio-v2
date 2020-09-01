import React, { useState } from 'react';
import classes from './NavigationBar.module.scss';

import Button from '../Button';

export default function NavigationBar() {
  const [navStyle, setNavStyle] = useState({});

  window.onscroll = function (e) {
    if (this.scrollY <= 5) {
      // top of the page
      setNavStyle({ boxShadow: 'none', padding: '1rem 0', background: 'none' });
    } else if (this.oldScroll > this.scrollY) {
      // scrolled up
      setNavStyle({ transform: 'translateY(0)' });
    } else {
      // scrolled down
      setNavStyle({ transform: 'translateY(-100%)' });
    }
    this.oldScroll = this.scrollY;
  }

  return (
    <nav className={classes.nav} style={navStyle}>
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
