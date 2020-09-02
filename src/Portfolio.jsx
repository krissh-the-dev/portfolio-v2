import React from 'react';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import { NavigationBar } from './Components';

export default function Portfolio() {
  return (
    <>
      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}
