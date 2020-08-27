import React from 'react';
import classes from './styles/styles.module.scss';

import Hero from './sections/Hero/Hero';
import About from './sections/About/About';


export default function Portfolio() {
  return (
    <main>
      <Hero />
      <About />

      <section className={classes.work}>
        <h3>My work</h3>
      </section>
    </main>
  );
}
