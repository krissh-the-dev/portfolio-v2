import React, { useState } from 'react';
import classes from './NavigationBar.module.scss';

import Button from '../Button';

export default function NavigationBar() {
  const [navStyle, setNavStyle] = useState(0);

  window.onscroll = function (e) {
    // print "false" if direction is down and "true" if up
    if (this.scrollY <= 5) {
      setNavStyle(0);
    } else if (this.oldScroll > this.scrollY) {
      setNavStyle(-1);
    } else {
      setNavStyle(1);
    }
    this.oldScroll = this.scrollY;
  }

  const topStyle = {
    boxShadow: 'none',
  }

  const freeStyle = {
    transform: 'translateY(-100%)'
  }

  const visibleStyle = {
    transform: 'translateY(0)'
  }

  const navStyles = [
    visibleStyle, topStyle, freeStyle
  ];

  // useEffect(() => {
  //   console.log('State change: ', navStyle);
  //   setScrollPosition(window.scrollY);
  // }, [navStyle])

  return (
    <nav className={classes.nav} style={navStyles[navStyle + 1]}>
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
