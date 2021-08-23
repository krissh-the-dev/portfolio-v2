import React, { useState, useEffect, useRef } from 'react';
import classes from './NavigationBar.module.scss';
import { Fade } from 'react-reveal';

import { LogoSmall, LogoLarge } from '../../images/Logo';
import Button from '../Button';

export default function NavigationBar() {
  const [navStyle, setNavStyle] = useState({});

  window.onscroll = function (e) {
    if (this.scrollY <= 5) {
      // top of the page
      setNavStyle({ boxShadow: 'none', paddingBottom: '1.5rem', background: 'none' });
    } else if (this.oldScroll > this.scrollY) {
      // scrolled up
      setNavStyle({ transform: 'translateY(0)' });
    } else {
      // scrolled down
      setNavStyle({ boxShadow: 'none', transform: 'translateY(-100%)' });
    }
    this.oldScroll = this.scrollY;
  };

  useEffect(() => setNavStyle({ boxShadow: 'none', paddingBottom: '1.5rem', background: 'none' }), []);

  const check = useRef(null);

  const handleHamClose = () => {
    check.current.checked = false;
  };

  return (
    <nav className={classes.nav} style={navStyle}>
      <Fade top delay={4000} duration={500}>
        <div className={classes.container}>
          {/* eslint-disable-next-line */}
          <a href='#' className={classes.nav__brand}>
            <img
              className={classes.nav__logo}
              src={LogoSmall}
              srcSet={`${LogoSmall} 300w, ${LogoLarge} 600w`}
              alt='Krish'
            />
          </a>

          <div className={classes.nav__list_container}>
            <input ref={check} type='checkbox' className={classes.nav__check} id='nav__check' />
            <label htmlFor='nav__check' className={classes.nav__toggle}>
              &nbsp;
            </label>

            <ul className={classes.nav__list}>
              <li className={classes.nav__item}>
                <a className={classes.nav__link} onClick={handleHamClose} href='#about'>
                  About
                </a>
              </li>
              <li className={classes.nav__item}>
                <a className={classes.nav__link} onClick={handleHamClose} href='#projects'>
                  Projects
                </a>
              </li>
              <li className={classes.nav__item}>
                <a className={classes.nav__link} onClick={handleHamClose} href='#statistics'>
                  Statistics
                </a>
              </li>
              <li className={classes.nav__item}>
                <a className={classes.nav__link} onClick={handleHamClose} href='#contact'>
                  Contact
                </a>
              </li>

              <li className={classes.hamCloseBtn} onClick={handleHamClose}>
                <span className='icon icon-arrow-thin-right'></span>
                Close
              </li>
            </ul>
          </div>

          <Button link='https://1drv.ms/b/s!AnRRdVvoe_29kUND8Wo-4xou5pnC'>Résumé</Button>
        </div>
      </Fade>
    </nav>
  );
}
