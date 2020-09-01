import React from 'react';

import Hero from './sections/Hero';
import About from './sections/About';
import { NavigationBar } from './Components';

export default function Portfolio() {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <About />
    </main>
  );
}
