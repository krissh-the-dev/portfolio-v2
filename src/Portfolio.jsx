import React from 'react';
import classes from './styles/styles.module.scss';

import Hero from './sections/Hero';
import About from './sections/About';
import NavigationBar from './Components/NavigationBar';

export default function Portfolio() {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <About />

      <section className={classes.work}>
        <h3>My work</h3>
      </section>
    </main>
  );
}
